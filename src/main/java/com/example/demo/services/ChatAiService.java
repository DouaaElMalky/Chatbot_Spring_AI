package com.example.demo.services;

import com.vaadin.flow.server.auth.AnonymousAllowed;
import com.vaadin.hilla.BrowserCallable;
import org.springframework.ai.chat.client.ChatClient;
import org.springframework.stereotype.Service;


@BrowserCallable
@AnonymousAllowed
public class ChatAiService {
    private ChatClient chatClient;

    public ChatAiService(ChatClient.Builder builder) {
        this.chatClient = builder.build();
    }

    public String ragchat(String question) {
        if (question == null || question.trim().isEmpty()) {
            throw new IllegalArgumentException("Question cannot be null or empty");
        }
        return chatClient.prompt()
                .user(question)
                .call()
                .content();
    }
}
