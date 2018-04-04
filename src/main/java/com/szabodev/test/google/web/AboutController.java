package com.szabodev.test.google.web;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/about/")
public class AboutController {


    @GetMapping("/version")
    @ResponseStatus(HttpStatus.OK)
    public String getVersion() {
        return getAppVersion();
    }

    private String getAppVersion() {
        String version = getClass().getPackage().getImplementationVersion();
        return version != null ? version : "Local";
    }
}
