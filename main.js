let numar = 0;

let victorie = 0;

let message = "";

var c = [0,0,0,0,0,0,0,0,0,0];

function calcul(v) {
    if(v == 1)
    {
        var messageEl = document.getElementById("message-el-1");

        if (c[1] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[1] = 1;

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[1] == c[4]) && (c[1] == c[7])) || ((c[1] == c[5]) && (c[1] == c[9])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[1] = 2;

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[1] == c[4]) && (c[1] == c[7])) || ((c[1] == c[5]) && (c[1] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 2)
    {
        var messageEl = document.getElementById("message-el-2");

        if (c[2] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[2] = 1;

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[2] = 2;

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 3)
    {
        var messageEl = document.getElementById("message-el-3");

        if (c[3] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[3] = 1;

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[3] == c[6]) && (c[3] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[3] = 2;

                if (((c[1] == c[2]) && (c[1] == c[3])) || ((c[3] == c[6]) && (c[3] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 4)
    {
        var messageEl = document.getElementById("message-el-4");

        if (c[4] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[4] = 1;

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[4] = 2;

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 5)
    {
        var messageEl = document.getElementById("message-el-5");

        if (c[5] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[5] = 1;

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[5] = 2;

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[3] == c[5]) && (c[3] == c[7])) || ((c[4] == c[5]) && (c[4] == c[6])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 6)
    {
        var messageEl = document.getElementById("message-el-6");

        if (c[6] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[6] = 1;

                if (((c[4] == c[5]) && (c[4] == c[6])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[6] = 2;

                if (((c[4] == c[5]) && (c[4] == c[6])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 7)
    {
        var messageEl = document.getElementById("message-el-7");

        if (c[7] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[7] = 1;

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[7] == c[5]) && (c[7] == c[3])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[7] = 2;

                if (((c[1] == c[4]) && (c[1] == c[7])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[7] == c[5]) && (c[7] == c[3])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if(v == 8)
    {
        var messageEl = document.getElementById("message-el-8");

        if (c[8] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[8] = 1;

                if (((c[7] == c[8]) && (c[7] == c[9])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[8] = 2;

                if (((c[7] == c[8]) && (c[7] == c[9])) || ((c[2] == c[5]) && (c[2] == c[8])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }
    else if (v == 9)
    {
        var messageEl = document.getElementById("message-el-9");

        if (c[9] == 0)
        {
            if (numar == 0)
            {
                messageEl.textContent = "X";

                numar = 1;

                c[9] = 1;

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "X e castigatorul suprem!";
                }
            }
            else
            {
                messageEl.textContent = "O";

                numar = 0;

                c[9] = 2;

                if (((c[1] == c[5]) && (c[1] == c[9])) || ((c[7] == c[8]) && (c[7] == c[9])) || ((c[3] == c[6]) && (c[3] == c[9])))
                {
                    victorie = 1;
                    message = "O e castigatorul suprem!";
                }
            }
        }
    }

    if (victorie == 1)
    {
        let messageEl = document.getElementById("message-e");

        messageEl.textContent = message;
    }
}