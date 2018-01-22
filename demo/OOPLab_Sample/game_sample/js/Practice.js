class Practice
{
    keydown(e, list)
    {
        switch (e.key)
        {
            case 'Right':
                this.picture.rotation += 10;
                break;
            case 'Left':
                this.picture.rotation -= 10;
        }
    }
    load()
    {
        this.picture = new Framework.Sprite(define.imagePath + '169.bmp');
        this.picture.position = { x: 100, y: 100 };
        this.picture.rotation = 0;
        this.position = { x: 100, y: 100 };
        this.rotation = 0;
    };
    initialize()
    {

    };
    update()
    {
       /* this.position =
            {
                x: this.position.x + 1,
                y: this.position.y
            };
        this.rotation += 1;
        this.picture.position = this.position;
        this.picture.rotation = this.rotation;*/
    };
    draw(ctx)
    {
        this.picture.draw(ctx);
    };
}