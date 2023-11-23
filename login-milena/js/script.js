<script>
    document.addEventListener('DOMContentLoaded', function () {
        const passwordInput = document.getElementById('floatingPassword');
        const togglePasswordButton = document.getElementById('togglePassword');

        togglePasswordButton.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Alterna o ícone do botão entre olho e olho cortado
            const iconClass = type === 'password' ? 'bi-eye' : 'bi-eye-slash';
            togglePasswordButton.textContent = '';  // Limpa o conteúdo existente
            togglePasswordButton.appendChild(document.createElement('i')).className = 'bi ' + iconClass;
        });
    });
</script>