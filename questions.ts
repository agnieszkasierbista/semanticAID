export const questions =
    {
        q: "Is it a major navigation block?",
        yes: "nav",
        no: {
            q: "Does it make sense on its own?",
            yes: "article",
            no: {
                q: "Is it required to understand the current content?",
                yes: {
                    q: "Could you move it to an appendix?",
                    yes: "figure",
                    no: {
                        q: "Is it logical to add a heading?",
                        yes: "section",
                        no: {
                            q: "Is it introductory content?",
                            yes: "header",
                            no: {
                                q: "Does the content contain information about an author, related links, or legal information?",
                                yes: "footer",
                                no: {
                                    q: "Does it have any semantics?",
                                    yes: "p", //or address, blockquote, pre....
                                    no: "div"
                                }
                            }
                        }
                    }
                },
                no: "aside"
            }
        }
    };