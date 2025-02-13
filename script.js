const button = document.getElementById("myBtn");

        button.onclick = function () {
            const container = document.querySelector(".container");
            const message = document.getElementById("h1");
            const flowers = document.querySelector(".flowers");
            const button = document.querySelector(".btn");
            const paragraph = document.querySelector(".p");
            const paragraph1 = document.querySelector(".p1");
            const background = document.querySelector(".night");
            const header = document.querySelector(".h1");
            const height = document.querySelector(".container");
      
          
            flowers.style.display = flowers.style.display === "flex" ? "none" : "flex";
            button.style.display = "none";
            background.style.display = background.style.display === "flex" ? "none" : "flex";
            paragraph1.style.display = "none";
            paragraph.style.textAlign = "center";
            height.style.height = "480px"
        
            container.style.animation = "fadeIn 1s ease-in forwards";
            

            message.textContent = "HAPPY VALENTINES DAY";
            paragraph.textContent =
                "ayy hala pinindot nya nga AHHAHAHAHA kinilig to' chariz anw, happy valentine's day sana may gift ako sayo mamaya pag wala kotong ka saken lima ahahhaha charot, seryoso  happy valentine's day to you and i hope this day will be a memorable one for you, and wag kanang mag papakatanga ulet maraming iba jan HAHAHAHAHAH so yun lg";
        
            const backgroundColor = "#10002b";
            const cyan = "violet";
        
          
            paragraph.style.color = "#e0aaff";
            header.style.color = "#9d4edd";
        
            container.style.backgroundColor = backgroundColor;
        
          
            message.style.animation = "fadeInText 5s ease-out forwards";
            paragraph.style.animation = "fadeInText 5s ease-out forwards";
            paragraph1.style.animation = "fadeInText 5s ease-out forwards";

        
          
            paragraph.style.textShadow = `0 0 10px ${cyan}`;
            paragraph1.style.textShadow = `0 0 10px ${cyan}`;
            header.style.textShadow = `0 0 10px ${cyan}`;
        
          
            let intensity = 0;
            const maxIntensity = 50; 
            const interval = setInterval(() => {
                container.style.boxShadow = `0 0 ${intensity}px ${cyan}`;
                intensity += 2; 
                if (intensity > maxIntensity) {
                    clearInterval(interval);
                }
            }, 100);
        };
