// Dados fictícios para demonstração
const piercers = [
    {
        name: "Laura Farias",
        city: "Fortaleza",
        title: "Body Piercer",
        bio: "Especialista em perfurações de orelha e microdermal. Atendimento com foco em biossegurança e joias de alta qualidade.",
        whatsapp: "5511999999999",
        instagram: "@laura.piercer",
        photo: "img/profissionais/piercer-1.png",
        studio: {
            address: "Rua das Flores, 123, Fortaleza - CE",
            mapLink: "https://goo.gl/maps/exemplo"
        }
    },
    {
        name: "Pedro Henrique",
        city: "Sobral",
        title: "Especialista em Piercings",
        bio: "Apaixonado por body modifications, trabalha com perfurações mais complexas e projetos personalizados.",
        whatsapp: "5585999999999",
        instagram: "@pedro_piercings",
        photo: "img/profissionais/piercer-2.png",
        studio: {
            address: "Av. Beira Mar, 456, Fortaleza - CE",
            mapLink: "https://goo.gl/maps/exemplo2"
        }
    },
    {
        name: "Mariana Costa",
        city: "Juazeiro do Norte",
        title: "Piercer Corporal",
        bio: "Piercer corporal com anos de experiência, dedicada a oferecer uma experiência segura e humanizada.",
        whatsapp: "5585998888888",
        instagram: "@marianacosta.piercings",
        photo: "img/profissionais/piercer-3.png",
        studio: {
            address: "Rua São João, 789, Juazeiro do Norte - CE",
            mapLink: "https://goo.gl/maps/exemplo3"
        }
    },
    {
        name: "Carlos Gomes",
        city: "Caucaia",
        title: "Piercer Corporal",
        bio: "Piercer corporal experiente, especializado em procedimentos com anestesia e joias de titânio.",
        whatsapp: "5585997777777",
        instagram: "@carlospiercer",
        photo: "img/profissionais/piercer-4.png",
        studio: {
            address: "Av. Central, 101, Caucaia - CE",
            mapLink: "https://goo.gl/maps/exemplo4"
        }
    }
];

// Função para criar ícone WhatsApp SVG
function createWhatsAppIcon() {
    return `
    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20.52 3.48a11.87 11.87 0 00-16.8 0 11.82 11.82 0 00-3.48 8.4c0 2.08.56 4.08 1.65 5.85L2 22l4.3-1.12A11.87 11.87 0 0020.52 3.48zM12 21.5a9.34 9.34 0 01-5.25-1.56l-.38-.25-2.5.64.67-2.43-.25-.38A9.4 9.4 0 013.5 12a8.96 8.96 0 0115-6.36 9.26 9.26 0 01-6.5 15.86zM15.44 14.88c-.2-.1-1.18-.58-1.36-.65s-.32-.1-.46.1-.52.65-.64.78-.24.15-.44.05a6.23 6.23 0 01-1.83-1.12 7.89 7.89 0 01-1.45-1.8c-.15-.25 0-.38.11-.49s.25-.28.37-.43.15-.25.23-.42.07-.3 0-.44-.46-1.12-.63-1.54-.33-.36-.45-.37h-.38a1.12 1.12 0 00-.8.38 3.3 3.3 0 00-1 2.42 4.44 4.44 0 002.11 3.55 7.68 7.68 0 003.2 1.65 3.72 3.72 0 002.6-.38 2.77 2.77 0 001.05-2.55c0-.14-.15-.25-.33-.35z"/>
    </svg>`;
}

// Função para criar ícone Instagram SVG
function createInstagramIcon() {
    return `
    <svg class="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 1.5a4.25 4.25 0 00-4.25 4.25v8.5a4.25 4.25 0 004.25 4.25h8.5a4.25 4.25 0 004.25-4.25v-8.5a4.25 4.25 0 00-4.25-4.25h-8.5zM12 7a5 5 0 110 10 5 5 0 010-10zm0 1.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7zm4.75-2.75a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5z"/>
    </svg>`;
}

// Função para criar o card do profissional com todos os dados
function createPiercerCard(piercer) {
    return `
        <section class="bg-white rounded-lg shadow-lg p-8 flex flex-col md:flex-row items-center md:items-start gap-8">
            <img src="${piercer.photo}" alt="Foto de ${piercer.name}" class="w-40 h-40 rounded-full object-cover border-4 border-cyan-600 shadow-md" loading="lazy" />
            <div class="flex-1">
                <h3 class="text-3xl font-bold text-gray-900 mb-1">${piercer.name}</h3>
                <p class="text-cyan-600 font-semibold mb-4">${piercer.title}</p>
                <p class="text-gray-700 mb-6 leading-relaxed">${piercer.bio}</p>
                <div class="space-y-3">
                    <a href="https://wa.me/${piercer.whatsapp}" target="_blank" class="inline-flex items-center gap-2 px-5 py-2 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-md transition duration-300">
                        ${createWhatsAppIcon()}
                        WhatsApp
                    </a>
                    <p class="text-gray-600">
                        <strong>Estúdio:</strong> ${piercer.studio.address} <br/>
                        <a href="${piercer.studio.mapLink}" target="_blank" class="text-cyan-600 hover:underline">Ver no Mapa</a>
                    </p>
                    <div class="flex space-x-4 mt-4">
                        <a href="https://instagram.com/${piercer.instagram.replace('@','')}" target="_blank" aria-label="Instagram ${piercer.name}" class="text-cyan-600 hover:text-cyan-800 transition">
                            ${createInstagramIcon()}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    `;
}

// Renderiza os cards na página
document.addEventListener("DOMContentLoaded", () => {
    const piercersContainer = document.getElementById("piercers-container");
    piercers.forEach(piercer => {
        piercersContainer.innerHTML += createPiercerCard(piercer);
    });
});
