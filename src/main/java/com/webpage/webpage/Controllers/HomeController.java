package com.webpage.webpage.Controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class HomeController {
    @GetMapping("Home")
    public String Home(){
        return "Home";
    }
}
