// Script to hide the other tables

        var Residential = document.getElementById("residential");
        var Commercial = document.getElementById("commercial");
        var Corporate = document.getElementById("corporate");
        var Hybrid = document.getElementById("hybrid");
        var buttons = document.getElementsByName("radio-btn");
        
        Residential.classList.remove("d-none");
        document.body.addEventListener("click", function(e){
            console.log(e);
            if (e.target.name === "radio-btn") {
                // console.log("button checked");
                if (e.target.id === "corporate-btn"){
                    Corporate.classList.remove("d-none")
                    Residential.classList.add("d-none")
                    Commercial.classList.add("d-none")
                    Hybrid.classList.add("d-none")
                }
                if (e.target.id === "residential-btn") {
                    Residential.classList.remove("d-none")
                    Commercial.classList.add("d-none")
                    Hybrid.classList.add("d-none")
                    Corporate.classList.add("d-none")
                }
                if (e.target.id === "commercial-btn"){
                    Commercial.classList.remove("d-none")
                    Hybrid.classList.add("d-none")
                    Residential.classList.add("d-none")
                    Corporate.classList.add("d-none")
                }
                if (e.target.id === "hybrid-btn"){
                    Hybrid.classList.remove("d-none")
                    Residential.classList.add("d-none")
                    Commercial.classList.add("d-none")
                    Corporate.classList.add("d-none")
                }
            }
        })

        


