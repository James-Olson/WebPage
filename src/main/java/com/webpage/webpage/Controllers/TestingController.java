package com.webpage.webpage.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class TestingController {

    @GetMapping ("Test")
    public String Test(){return "EmailForm";}
}
