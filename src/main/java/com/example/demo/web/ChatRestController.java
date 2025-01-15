package com.example.demo.web;

import com.example.demo.services.ChatAiService;
import org.springframework.http.MediaType;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.awt.*;

@RequestMapping
@RestController

public class ChatRestController {

private ChatAiService chatAiService;

    public ChatRestController(ChatAiService chatAiService) {
        this.chatAiService = chatAiService;
    }

    @GetMapping(value="/ask" , produces = MediaType.TEXT_PLAIN_VALUE)
    public String ask(String question) {
        return chatAiService.ragchat(question);
    }
}


