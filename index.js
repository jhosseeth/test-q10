function setAnimation(animation) {
    document.getElementById("animated-model").setAttribute("animation-name", animation);
}

document.addEventListener("DOMContentLoaded", () => {
    const modelViewer = document.getElementById("animated-model");

    modelViewer.addEventListener("load", () => {
        const animations = modelViewer.availableAnimations
        let currentIndex = 4;
        

        function playAnimation(index) {
            if (index < 0 || index >= animations.length) return;
            modelViewer.animationName = animations[index];
            currentIndex = index;
        }

        // Iniciar con la primera animación
        playAnimation(currentIndex);
    });
});