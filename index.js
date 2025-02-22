document.addEventListener("DOMContentLoaded", () => {
    const modelViewer = document.getElementById("animated-model");
    const buttonContainer = document.getElementById("animation-buttons");
    const prevButton = document.getElementById("prev-btn");
    const nextButton = document.getElementById("next-btn");

    modelViewer.addEventListener("load", () => {
        const animations = modelViewer.availableAnimations;
        let currentIndex = 4;

        // Crear botones para cada animación
        animations.forEach((anim, index) => {
            const btn = document.createElement("button");
            btn.textContent = anim;
            btn.classList.add("p-2", "bg-blue-500", "text-white", "rounded");
            btn.addEventListener("click", () => {
                playAnimation(index);
            });
            buttonContainer.appendChild(btn);
        });

        function playAnimation(index) {
            if (index < 0 || index >= animations.length) return;
            modelViewer.animationName = animations[index];
            currentIndex = index;
        }

        prevButton.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + animations.length) % animations.length;
            playAnimation(currentIndex);
        });

        nextButton.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % animations.length;
            playAnimation(currentIndex);
        });

        // Iniciar con la primera animación
        playAnimation(currentIndex);
    });
});