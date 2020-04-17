var div = document.createElement("div");
div.style.display = "grid";
if (!(div.style.display === "grid")) {
    alert(
        "You are using a browser that does not support CSS grid! Please consider upgrading."
    );
}