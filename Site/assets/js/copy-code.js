document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("pre").forEach((pre) => {
        let button = document.createElement("button");
        button.className = "copy-button";
        button.innerText = "Copy";
        pre.appendChild(button);

        // Use pointerdown instead of click for better mobile support
        button.addEventListener("pointerdown", function (e) {
            e.preventDefault(); // Prevents mobile double-tap zoom
            let code = pre.querySelector("code").innerText;

            // Try navigator.clipboard, fallback to execCommand
            if (navigator.clipboard && window.isSecureContext) {
                navigator.clipboard.writeText(code).then(() => {
                    showCopied(button);
                }).catch(err => {
                    fallbackCopyText(code, button);
                });
            } else {
                fallbackCopyText(code, button);
            }
        });
    });

    function showCopied(button) {
        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
    }

    function showFailed(button) {
        button.innerText = "Failed!";
        setTimeout(() => (button.innerText = "Copy"), 2000);
    }

    function fallbackCopyText(text, button) {
        // Create temporary textarea
        let textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";  // Avoid scrolling
        textArea.style.top = "-9999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();

        try {
            let successful = document.execCommand('copy');
            if (successful) {
                showCopied(button);
            } else {
                showFailed(button);
            }
        } catch (err) {
            showFailed(button);
        }

        document.body.removeChild(textArea);
    }
});
