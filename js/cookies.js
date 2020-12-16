window.addEventListener("load", function () {
    window.cookieconsent.initialise({
        "palette": {
            "popup": {
                "background": "#1f487c",
                "text": "#ffffff"
            },
            "button": {
                "background": "#1081df",
                "text": "#ffffff"
            },
            "highlight":
            {
                "background": "#1f487c",
                "text": "#ffffff"
            },
        },
        "theme": "block",
        "position": "bottom",
        "content": {
            "message": "Używam plików cookie i innych technologii śledzenia, aby poprawić jakość przeglądania mojej witryny, wyświetlać spersonalizowane treści i reklamy, analizować ruch w naszej witrynie i wiedzieć, skąd pochodzą moi użytkownicy.<br/><a href='polityka-prywatnosci.html'>Polityka Prywatności</a>.",
            "dismiss": "Akceptuję",
            "link": "Więcej o ciasteczkach"
        }
    })
});