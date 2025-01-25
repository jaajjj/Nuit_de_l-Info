document.addEventListener('DOMContentLoaded', function() {
    // Récupérer le jour actuel
    //const currentDay = (new Date()).getDate();
    const currentDay = 24;
    let GrinchOMetre = 0;
    function Grinch() {
        const rdm = Math.floor(Math.random() * 10);
        if (rdm === 0) {
            let cookieArr = document.cookie.split(";");
    
            for(let i = 0; i < cookieArr.length; i++) {
                let cookiePair = cookieArr[i].split("=");
                
                if("Grinch" == cookiePair[0].trim()) {
                    document.cookie = `Grinch=${parseInt(decodeURIComponent(cookiePair[1]))+1};`                }
            }
            return true;
        } 
        return false;
    }
    const grinch = document.getElementById("grinch");
    grinch.innerHTML= "Nombre de cadeaux volés : " + document.cookie.split(";")[0].split("=")[1];
    const modal = document.getElementById("modal");

    document.getElementById("button1").addEventListener("click", () => {
        if(currentDay >= 1){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Carte postale à envoyer :  </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <img src="src/image/carte.png" alt="Carte postale" style="max-width: 100%; border-radius: 10px;">
        `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })}
    })

    document.getElementById("button2").addEventListener("click", () => {
        if(currentDay>= 2){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Petit chant de Noël : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <video controls autoplay style="max-width: 100%; border-radius: 10px;">
                <source src="src/image/jingle bell.mp4" type="video/mp4">
                Votre navigateur ne prend pas en charge la vidéo HTML5.
            </video>
        `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })}
    })

    document.getElementById("button3").addEventListener("click", () => {
        if(currentDay>= 3){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Message du Père Noël ! </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <video controls autoplay style="max-width: 100%; border-radius: 10px;">
                <source src="src/image/Message du Père Noël en Laponie aux enfants 🦌🎅 Papa Noël parle en Finlande.mp4" type="video/mp4">
                Votre navigateur ne prend pas en charge la vidéo HTML5.
            </video>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    });

    document.getElementById("button4").addEventListener("click", () => {
        if (currentDay >= 4) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Message du jour : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>Prenez soin de vous aujourd’hui, vous êtes une étoile ⭐<p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button5").addEventListener("click", () => {
        if (currentDay >= 5) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Charade du jour : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>Mon premier porte une couronne</p>
            <p>Mon deuxième sert à tenir les voiles d’un bateau</p>
            <p>Mon troisième est la fin du mot « image »</p>
            <p>Mon tout s’est mis en route le 25/12 pour apporter des cadeaux à l’enfant Jésus.</p>

            <br>

            <p> Réponse : </p>
            <p>Rois-mage (roi-mat-ge)</p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button6").addEventListener("click", () => {
        if (currentDay >= 6) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Petite histoire : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>La veille de Noël, Lucas, seul dans son nouveau village, aperçut une étoile brillante au-dessus d’une colline. Intrigué, il sortit et trouva le Père Noël et ses rennes dans une clairière magique. «Aide-moi à retrouver mon sac de jouets !» dit le Père Noël. Lucas accepta. Ensemble, ils survolèrent le village et retrouvèrent le sac près d’une cabane. Pour le remercier, le Père Noël offrit à Lucas une boule à neige magique. Le lendemain, Lucas montra sa boule à d’autres enfants et se fit de nouveaux amis. Ce Noël, Lucas découvrit la vraie magie : le partage.<p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button7").addEventListener("click", () => {
        if (currentDay >= 7) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Citation du jour : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>Le meilleur de tous les cadeaux autour de n'importe quel sapin de Noël : la présence d'une famille heureuse tous enveloppés l'un dans l'autre.<p><p>Burton Hillis</p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button8").addEventListener("click", () => {
        if (currentDay >= 8) {
            if (Grinch()) return document.location.href="./grinch.html";
            const tableConfig = [
                [false, false, false, false, true, true, true, true, true, true],
                [false, false, false, false, true, false, false, false, false, false],
                [false, false, false, false, true, false, false, false, false, false],
                [false, false, true, true, true, true, true, true, false, false],
                [false, false, false, false, true, false, false, false, false, false],
                [false, true, false, false, true, true, true, true, true, false],
                [false, true, false, false, true, false, false, false, false, false],
                [false, true, false, false, true, false, false, false, false, false],
                [false, true, false, false, true, false, false, false, false, false],
                [true, true, true, true, true, false, false, false, false, false]
            ];
            const words = ["SAPIN", "CADEAU", "BOUGIE", "RENNE", "NEIGE", "CHAUSSETTE"];
            function createTable() {
                const table = document.getElementById("crossword");
                let html = "";
                for (let row = 0; row < tableConfig.length; row++) {
                    html += "<tr>";
                    for (let col = 0; col < tableConfig[row].length; col++) {
                        if (!tableConfig[row][col]) {
                            html += '<td class="inactive"></td>';
                        } else if (typeof tableConfig[row][col] === "string") {
                            html += `<td>${tableConfig[row][col]}</td>`;
                        } else {
                            html += "<td></td>";
                        }
                    }
                    html += "</tr>";
                }
                table.innerHTML = html;
            }
            function checkSolution() {
                const answer = document.getElementById("answer").value.trim().toUpperCase();
                let isCorrect = false;
            
                if (words.includes(answer)) {
                    isCorrect = true;
                    words.splice(words.indexOf(answer), 1);
                }
                
                if (isCorrect) {
                    alert("Bonne réponse ! 🎉");
                    document.getElementById("answer").value = "";
                    let table=document.getElementById("crossword");
                    table.innerHTML="";
                    switch(answer){
                        case "SAPIN":
                            tableConfig[5][4] = "S";
                            tableConfig[5][5] = "A";
                            tableConfig[5][6] = "P";
                            tableConfig[5][7] = "I";
                            tableConfig[5][8] = "N";
                            break;
                        case "CADEAU":
                            tableConfig[0][4] = "C";
                            tableConfig[0][5] = "A";
                            tableConfig[0][6] = "D";
                            tableConfig[0][7] = "E";
                            tableConfig[0][8] = "A";
                            tableConfig[0][9] = "U";
                            break;
                        case "BOUGIE":
                            tableConfig[3][2] = "B";
                            tableConfig[3][3] = "O";
                            tableConfig[3][4] = "U";
                            tableConfig[3][5] = "G";
                            tableConfig[3][6] = "I";
                            tableConfig[3][7] = "E";
                            break;
                        case "RENNE":
                            tableConfig[5][1] = "R";
                            tableConfig[6][1] = "E";
                            tableConfig[7][1] = "N";
                            tableConfig[8][1] = "N";
                            tableConfig[9][1] = "E";
                            break;
                        case "NEIGE":
                            tableConfig[9][0] = "N";
                            tableConfig[9][1] = "E";
                            tableConfig[9][2] = "I";
                            tableConfig[9][3] = "G";
                            tableConfig[9][4] = "E";
                            break;
                        case "CHAUSSETTE":
                            tableConfig[0][4] = "C";
                            tableConfig[1][4] = "H";
                            tableConfig[2][4] = "A";
                            tableConfig[3][4] = "U";
                            tableConfig[4][4] = "S";
                            tableConfig[5][4] = "S";
                            tableConfig[6][4] = "E";
                            tableConfig[7][4] = "T";
                            tableConfig[8][4] = "T";
                            tableConfig[9][4] = "E";
                            break;
                    }
                    createTable();
                    if (words.length === 0) {
                        alert("Bravo, vous avez trouvé tous les mots ! 🎉");
                    }
                } else {
                    alert("Mauvaise réponse. Essayez encore !");
                    document.getElementById("answer").value = "";
                }
            }
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Mots croisés : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <table id="crossword"></table>
            <div id="clues">
                <h2>Indices :</h2>
                <ul>
                    <li><b>Horizontal :</b> 1. Offert pendant les fêtes (6 lettres)</li>
                    <li><b>Horizontal :</b> 2. Décoration lumineuse de Noël (6 lettres)</li>
                    <li><b>Horizontal :</b> 3. Arbre traditionnel de Noël (5 lettres)</li>
                    <li><b>Horizontal :</b> 4. Tombe souvent pendant la période de Noël (5 lettres)</li>
                    <li><b>Vertical :</b> 1. Animal qui tire le traineau du Père Noël (5 lettres)</li>
                    <li><b>Vertical :</b> 2. On y met des petits cadeaux de Noël (10 lettres)</li>
                </ul>
                <div style="display: flex; justify-content: space-around;">
                    <input type="text" id="answer" placeholder="Entrez votre réponse (ex: sapin)">
                    <button id="check-button">Vérifier</button>
                </div>
            </div>
            `
            createTable()

            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
            document.getElementById("check-button").addEventListener("click", checkSolution);
        }
    })

    document.getElementById("button9").addEventListener("click", () => {
        if (currentDay >= 9) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display flex"; justify-content: space-around;">
                <h2 align="center"> 🕺 : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <iframe autoplay src="https://www.youtube.com/embed/lzTQCgpHAWE?si=-vkcRvTdCqa943qK&amp;start=3&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button10").addEventListener("click", () => {
        if (currentDay >= 10) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
             <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> devinette : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>
                Mon premier est le contraire de froid.<br>
                Mon deuxième se trouve en haut d’une chemise ou d’un manteau.<br>
                Mon troisième vient en premier dans l’alphabet.<br>
                Mon tout s’offre souvent à Noël.<br><br>
                Reponse : Le chocolat
            </p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })
    document.getElementById("button11").addEventListener("click", () => {
        if (currentDay >= 11) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
             <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Fond d'écran téléchargeable : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <img src="src/image/fondEcran.webp" alt="Fond d’ecran" style="max-width: 100%; border-radius: 10px;">
            <a download href="src/image/fondEcran.webp"> <button style="cursor: pointer; background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; width: 200px;"> Télécharger </button> </a>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })
    document.getElementById("button12").addEventListener("click", () => {
        if(currentDay >= 12){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Il neige !! </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; text-align: right; align-self: center;">&times;</button>
            </div>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
            setInterval(neige, 25);
        }
    });
    document.getElementById("button13").addEventListener("click", () => {
        if(currentDay >= 13){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Défi du jour: </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; text-align: right; align-self: center;">&times;</button>
            </div>
            <p> Aujourd'hui le défi consiste à jeter une boule de neige sur une voiture de couleure bleue. </p>
            <p> Bonne chance ! </p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
            setInterval(neige, 25);
        }
    });
    document.getElementById("button14").addEventListener("click", () => {
        if (currentDay >= 14) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
             <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Film comique : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>
                Le Grinch <br/>
                Le Grinch, une créature grincheuse, tente de voler Noël aux habitants de Whoville, mais une fillette, Cindy Lou, lui fait découvrir l'esprit de Noël.
            </p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button15").addEventListener("click", () => {
        if(currentDay >= 15){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Petit chant de Noël : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <video controls autoplay style="max-width: 100%; border-radius: 10px;">
                <source src="src/image/vache qui danse (15 minutes).mp4" type="video/mp4">
                Votre navigateur ne prend pas en charge la vidéo HTML5.
            </video>
        `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })}
    })

    document.getElementById("button16").addEventListener("click", () => {
        if (currentDay >= 16) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Message du jour : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <p>Un jour, un enfant demanda au Père Noël: "Comment entres-tu sans cheminée ?" Le Père Noël sourit et répondit : "Avec ma clé magique !" L’enfant s’exclama : "N’oublie pas, on a changé la serrure !"<p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button17").addEventListener("click", () => {
        let interval
        if (currentDay >= 17) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Snake </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; text-align: right; align-self: center;">&times;</button>
            </div>
            <canvas id="gameCanvas" style="display: block; margin: 20px auto; background: #000; border: 1px solid #fff;"></canvas>

            `
            const canvas = document.getElementById("gameCanvas");
            const ctx = canvas.getContext("2d");

            // Canvas size
            canvas.width = 200;
            canvas.height = 200;

            const boxSize = 10; // Size of each box in the grid
            let snake = [{ x: 100, y: 100 }]; // Snake starting position
            let food = { x: randomPosition(), y: randomPosition() }; // Initial food position
            let dx = boxSize; // Snake movement direction
            let dy = 0;
            let score = 0;

            // Function to generate a random position for food
            function randomPosition() {
                return Math.floor((Math.random() * canvas.width) / boxSize) * boxSize;
            }

            // Draw snake
            function drawSnake() {
                ctx.fillStyle = "lime";
                snake.forEach((part) => ctx.fillRect(part.x, part.y, boxSize, boxSize));
            }

            // Draw food
            function drawFood() {
                ctx.fillStyle = "red";
                ctx.fillRect(food.x, food.y, boxSize, boxSize);
            }

            // Move snake
            function moveSnake() {
                const head = { x: snake[0].x + dx, y: snake[0].y + dy };
                snake.unshift(head);

                // Check if snake eats food
                if (head.x === food.x && head.y === food.y) {
                    score++;
                    food = { x: randomPosition(), y: randomPosition() };
                } else {
                    snake.pop();
                }
            }

            // Check for collisions
            function checkCollision() {
                const head = snake[0];
                // Wall collision
                if (head.x < 0 || head.y < 0 || head.x >= canvas.width || head.y >= canvas.height) {
                    return true;
                }
                // Self collision
                for (let i = 1; i < snake.length; i++) {
                    if (head.x === snake[i].x && head.y === snake[i].y) {
                        return true;
                    }
                }
                return false;
            }

            // Update game
            function updateGame() {
                if (checkCollision()) {
                    alert(`Partie perdue ! Votre score : ${score}`);
                    return clearInterval(interval)
                } else {
                    ctx.clearRect(0, 0, canvas.width, canvas.height);
                    drawFood();
                    moveSnake();
                    drawSnake();
                }
            }

            // Control snake
            document.addEventListener("keydown", (event) => {
                if (event.key === "ArrowUp" && dy === 0) {
                    dx = 0;
                    dy = -boxSize;
                } else if (event.key === "ArrowDown" && dy === 0) {
                    dx = 0;
                    dy = boxSize;
                } else if (event.key === "ArrowLeft" && dx === 0) {
                    dx = -boxSize;
                    dy = 0;
                } else if (event.key === "ArrowRight" && dx === 0) {
                    dx = boxSize;
                    dy = 0;
                }
            });

            // Game loop
            interval = setInterval(updateGame, 200);
            

            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
            document.getElementById("check-button").addEventListener("click", checkSolution);
        }
    })
    
    document.getElementById("button19").addEventListener("click", () => {
        if (currentDay >= 19) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Idée cadeau dernière minute : </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <li>boite de chocolat</li>
            <li>mini plante</li>
            <li>du thé</li>
            <li>casse tête</li>

    
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button20").addEventListener("click", () => {
        if (currentDay >= 20) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Mousse au chocolat</h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
                <h2 align="center"> Ingrédients : </h2>                
            </div>
            
            <li> 65g de chocolat </li>
            <li> 2 oeufs </li>
            <li> 10g de beurre </li>
            <li> 10g de sucre </li>
        
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Ingrédients : </h2>
            </div>
            <p>
                Faire fondre le chocolat et le beurre. Dans un autre saladier séparer le blanc des jaunes d'oeufs puis battre les blancs en neige. Dans le saladier où il y a le chocolat ajouter le sucre, les jaunes d'oeufs et les blanc en neige. Pour finir mettre la préparation au frigo pendant au moins 1h.
            </p>
            `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button21").addEventListener("click", () => {
        if (currentDay >= 21) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> 🕳/h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            
            `
            const gravity = 0.5; // Force de gravité
            const friction = 0.98; // Friction pour ralentir le mouvement
            const elements = []; // Liste des éléments à animer

            // Variable pour suivre les éléments en cours de déplacement
            let draggedElement = null;

            // Fonction pour initialiser les éléments
            function initializeElements() {
            document.querySelectorAll('*').forEach((el) => {
                const rect = el.getBoundingClientRect();
                elements.push({
                element: el,
                x: rect.left,
                y: rect.top,
                velocityX: 0,
                velocityY: 0,
                width: rect.width,
                height: rect.height
                });

                // Gestion du drag-and-drop
                el.addEventListener('mousedown', (event) => {
                draggedElement = elements.find(obj => obj.element === el);
                draggedElement.offsetX = event.clientX - draggedElement.x;
                draggedElement.offsetY = event.clientY - draggedElement.y;
                });
            });
            }

            // Fonction pour mettre à jour les positions
            function updatePositions() {

            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;

            elements.forEach((obj) => {
                if (obj === draggedElement) return; // Ne pas animer l'élément en cours de déplacement

                // Appliquer la gravité
                obj.velocityY += gravity;

                // Appliquer la friction
                obj.velocityX *= friction;
                obj.velocityY *= friction;

                // Mettre à jour la position
                obj.x += obj.velocityX;
                obj.y += obj.velocityY;

                // Collision avec les bords
                if (obj.x < 0 || obj.x + obj.width > windowWidth) {
                obj.velocityX = -obj.velocityX;
                obj.x = Math.max(0, Math.min(obj.x, windowWidth - obj.width));
                }

                if (obj.y + obj.height > windowHeight) {
                obj.velocityY = -obj.velocityY * 0.8; // Réduction de la vitesse après rebond
                obj.y = windowHeight - obj.height;
                }

                // Appliquer les nouvelles positions
                obj.element.style.transform = `translate(${obj.x}px, ${obj.y}px)`;
            });

            requestAnimationFrame(updatePositions);
            }

            // Gestion du déplacement avec la souris
            document.addEventListener('mousemove', (event) => {
            if (draggedElement) {
                draggedElement.x = event.clientX - draggedElement.offsetX;
                draggedElement.y = event.clientY - draggedElement.offsetY;

                // Appliquer la position directement
                draggedElement.element.style.transform = `translate(${draggedElement.x}px, ${draggedElement.y}px)`;
            }
            });

            // Libérer l'élément après le drag
            document.addEventListener('mouseup', () => {
            if (draggedElement) {
                draggedElement.velocityX = 0; // Réinitialiser la vitesse horizontale
                draggedElement.velocityY = 0; // Réinitialiser la vitesse verticale
                draggedElement = null;
            }
            });

            // Initialiser les éléments dès le chargement
            initializeElements();
            updatePositions();


            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })
    
    document.getElementById("button22").addEventListener("click", () => {
        if (currentDay >= 22) {
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML=`
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Coloriage Magique : Protégeons les Océans 🌊 </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; align-self: center;">&times;</button>
            </div>
            <style>
            #coloriage {
                display: grid;
                grid-template-columns: repeat(7, 30px);
                gap: 5px;
                justify-content: center;
                margin-top: 20px;
            }

            .cell {
                width: 30px;
                height: 30px;
                border: 1px solid #ddd;
                background-color: white;
                cursor: pointer;
                transition: background-color 0.3s ease;
            }

            .cell.inactive {
                background-color: #f0f0f0;
                cursor: not-allowed;
            }
        </style>
        <div id="coloriage"></div>
            `

            // Configuration de la grille (0 = vide, autre chiffre = couleur)
            const gridConfig = [
                [1, 1, 1, 4, 1, 1, 1],
                [1, 1, 3, 3, 3, 1, 1],
                [1, 3, 3, 3, 3, 3, 1],
                [1, 1, 3, 3, 3, 1, 1],
                [1, 3, 3, 3, 3, 3, 1],
                [3, 3, 3, 3, 3, 3, 3],
                [1, 1, 1, 5, 1, 1, 1],
            ];

            // Couleurs associées
            const colors = {
                0:"white",
                1: "blue",       // Bleu pour l'océan
                2: "beige",      // Beige pour l'étoile de mer
                3: "green",      // Vert pour les algues
                4: "yellow",       // Gris pour les déchets
                5: "brown",       // Rose pour les coquillages
            };

            // Créer la grille de coloriage
            function createGrid() {
                const container = document.getElementById("coloriage");

                gridConfig.forEach((row, rowIndex) => {
                    row.forEach((cell, colIndex) => {
                        const cellElement = document.createElement("div");
                        cellElement.classList.add("cell");

                        // Si la case est vide (0), la désactiver
                        if (cell === -1) {
                            cellElement.classList.add("inactive");
                        } else {
                            // Ajouter un événement clic pour révéler la couleur
                            cellElement.addEventListener("click", () => {
                                cellElement.style.backgroundColor = colors[cell];
                                cellElement.style.cursor = "not-allowed";
                                cellElement.removeEventListener("click", arguments.callee); // Désactiver le clic
                            });
                        }

                        container.appendChild(cellElement);
                    });
                });
            }

            // Initialiser la grille
            createGrid();

            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })
        }
    })

    document.getElementById("button23").addEventListener("click", () => {
        if(currentDay >= 23){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Oh! Oh! Oh! </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; text-align:right; align-self: center; ">&times;</button>
            </div>
            <h3 align="center" id="text-santa"> </h3>
            <img id = "santa" src="src/image/santa.png" alt="Image en pop-up" style="width: 100px; height :140px; border-radius: 10px;">
            <button id="cookie" style="cursor: pointer; background-color: #4CAF50; color: white; padding: 10px 20px; border: none; border-radius: 5px; width: 200px;">Donner un cookie au Père Noël</button>
         `
            let width = 100
            document.getElementById("cookie")?.addEventListener("click", () => {
                if(width >= 300){
                    (document.getElementById("text-santa")).innerHTML = "Le Père Noël a trop mangé 😥";
                    return
                }
                width+=20;
                (document.getElementById("santa")).style = "border-radius: 10px ; height :140px; width:"+width+"px;";
            })
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })}
    })

    document.getElementById("button24").addEventListener("click", () => {
        if(currentDay >= 24){
            if (Grinch()) return document.location.href="./grinch.html";
            modal.style="display:block;"
            modal.innerHTML= `
            <div style="display: flex; justify-content: space-around;">
                <h2 align="center"> Joyeux Noël ! </h2>
                <button id="buttonClose" style="cursor: pointer; font-size: 24px; color: red; text-align:right; align-self: center; ">&times;</button>
            </div>
            <img src="src/image/R.jpg" alt="Image en pop-up" style="max-width: 100%; border-radius: 10px;">
        `
            document.getElementById("buttonClose")?.addEventListener("click", () => {
                modal.style="display:none;"
                modal.innerHTML="";
            })}
    })
});

function neige() {
    const item = document.createElement("div");
    item.className = "flocon";
    item.style.top = "0px";
    item.textContent = "*";
    item.style.left = Math.random() * (window.innerWidth-25) + "px";
    item.style.animationDuration = Math.random() * 2 + 1.5 + "s";
    document.body.appendChild(item);

    item.addEventListener("animationend", () => item.remove());
}
