// Dados fictícios para demonstração
        const piercers = [
            {
                name: "Laura Farias",
                city: "Fortaleza",
                bio: "Especialista em perfurações de orelha e microdermal. Atendimento com foco em biossegurança e joias de alta qualidade.",
                instagram: "@laura.piercer"
            },
            {
                name: "Pedro Henrique",
                city: "Sobral",
                bio: "Apaixonado por body modifications, trabalha com perfurações mais complexas e projetos personalizados.",
                instagram: "@pedro_piercings"
            },
            {
                name: "Mariana Costa",
                city: "Juazeiro do Norte",
                bio: "Piercer corporal com anos de experiência, dedicada a oferecer uma experiência segura e humanizada.",
                instagram: "@marianacosta.piercings"
            },
            {
                name: "Carlos Gomes",
                city: "Caucaia",
                bio: "Piercer corporal experiente, especializado em procedimentos com anestesia e joias de titânio.",
                instagram: "@carlospiercer"
            }
        ];

        const events = [
            {
                title: "Workshop de Biossegurança em Piercing",
                date: "20 de Outubro de 2025",
                location: "Online (via Zoom)",
                description: "Palestra com profissionais da área da saúde sobre as melhores práticas para esterilização e higiene."
            },
            {
                title: "Encontro de Piercers do Ceará",
                date: "15 de Novembro de 2025",
                location: "Espaço Piercer's Lab, Fortaleza",
                description: "Oportunidade de networking e troca de experiências entre profissionais de todo o estado."
            }
        ];

        // Função para gerar o HTML de um card de piercer
        function createPiercerCard(piercer) {
            return `
                <div class="bg-white p-6 rounded-lg shadow-md transition transform hover:-translate-y-1 hover:shadow-lg duration-300">
                    <h3 class="text-xl font-semibold mb-2">${piercer.name}</h3>
                    <p class="text-gray-500 mb-2">${piercer.city}</p>
                    <p class="text-sm text-gray-600 mb-4">${piercer.bio}</p>
                    <a href="https://instagram.com/${piercer.instagram.replace('@', '')}" target="_blank" class="inline-block bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm font-medium hover:bg-gray-300 transition duration-300">
                        ${piercer.instagram}
                    </a>
                </div>
            `;
        }

        // Função para gerar o HTML de um card de evento
        function createEventCard(event) {
            return `
                <div class="bg-white p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
                    <h3 class="text-2xl font-semibold text-gray-800 mb-1">${event.title}</h3>
                    <p class="text-sm text-gray-500 mb-2"><strong>Data:</strong> ${event.date} | <strong>Local:</strong> ${event.location}</p>
                    <p class="text-gray-600">${event.description}</p>
                </div>
            `;
        }

        // Renderiza os cards na página
        document.addEventListener("DOMContentLoaded", () => {
            const piercersContainer = document.getElementById("piercers-container");
            const eventsContainer = document.getElementById("events-container");

            piercers.forEach(piercer => {
                piercersContainer.innerHTML += createPiercerCard(piercer);
            });

            events.forEach(event => {
                eventsContainer.innerHTML += createEventCard(event);
            });
            
            // Lógica do formulário de contato
            const contactForm = document.getElementById('contact-form');
            const successMessage = document.getElementById('contact-success');
            
            contactForm.addEventListener('submit', (e) => {
                e.preventDefault();
                contactForm.reset(); // Limpa o formulário
                successMessage.classList.remove('hidden'); // Mostra a mensagem de sucesso
                setTimeout(() => {
                    successMessage.classList.add('hidden'); // Esconde a mensagem depois de 5 segundos
                }, 5000);
            });
        });