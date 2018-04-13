package com.szabodev.test.google.web;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.oauth2.provider.OAuth2Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class AuthenticationController {

    private static final Logger logger = LoggerFactory.getLogger(AuthenticationController.class);

    @GetMapping("/user")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Object> getAuthenticatedUser() {
        return getAuthenticatedUser(false);
    }

    @GetMapping("/user/info")
    @ResponseStatus(HttpStatus.OK)
    public ResponseEntity<Object> getAuthenticatedUserDetails() {
        return getAuthenticatedUser(true);
    }

    private ResponseEntity<Object> getAuthenticatedUser(boolean detailed) {
        logger.info("getAuthenticatedUser called");
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth instanceof AnonymousAuthenticationToken) {
            logger.info("User not logged in!");
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("User not logged in!");
        }
        OAuth2Authentication oAuth2Authentication = (OAuth2Authentication) auth;
        logger.info("User logged in, auth: " + auth);
        if (detailed) {
            return ResponseEntity.ok(oAuth2Authentication);
        } else {
            return ResponseEntity.ok(oAuth2Authentication.getUserAuthentication().getDetails());
        }
    }
}
