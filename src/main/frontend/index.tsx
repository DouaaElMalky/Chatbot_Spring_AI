import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Index from "./views/@index";
import Chat from "./views/chat";
import Layout from "./views/@Layout";

const root = createRoot(document.getElementById("outlet"));
root.render(
    <Router>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Index />} />
                <Route path="chat" element={<Chat />} />
            </Route>
        </Routes>
    </Router>
);