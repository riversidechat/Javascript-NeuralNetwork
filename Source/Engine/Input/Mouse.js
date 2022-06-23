class mouse
{
    constructor() {}
    static position = vec2.zero;
    static down = false;
    static pressed = false;
    static released = false;

    static move(e)
    {
        mouse.position.x = e.x;
        mouse.position.y = e.y;
    }
    static event(e)
    {
        var state = (e.type == "mousedown");
        mouse.down = state;
        mouse.pressed = state;
        mouse.released = !state;
    }
    static update()
    {
        mouse.pressed = false;
        mouse.released = false;
    }
}

document.addEventListener("mousemove", mouse.move);
document.addEventListener("mousedown", mouse.event);
document.addEventListener("mouseup", mouse.event);