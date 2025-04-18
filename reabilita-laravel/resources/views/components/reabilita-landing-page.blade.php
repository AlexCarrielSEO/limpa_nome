<div class="flex flex-col min-h-screen bg-white">
    <!-- Topo/Header -->
    <header class="w-full bg-white shadow-sm sticky top-0 z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <div class="text-2xl font-bold text-blue-600">Reabilita</div>
            <button class="md:hidden lg:flex cta-button-pulse bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 mx-4">
                Quero Ajuda!
            </button>
            <nav class="hidden md:flex space-x-6 items-center">
                <a href="#como-funciona" class="text-gray-600 hover:text-blue-600 transition-colors">
                    Como Funciona
                </a>
                <a href="#beneficios" class="text-gray-600 hover:text-blue-600 transition-colors">
                    Benefícios
                </a>
                <a href="#depoimentos" class="text-gray-600 hover:text-blue-600 transition-colors">
                    Depoimentos
                </a>
                <a href="#contato" class="text-gray-600 hover:text-blue-600 transition-colors">
                    Contato
                </a>
                <button class="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
                    Login / Cadastro
                </button>
            </nav>
            <button class="md:hidden" aria-label="Menu">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
        </div>
    </header>

    <main class="flex-grow">
        <!-- Hero Section -->
        <section class="relative py-20 bg-gradient-to-r from-blue-50 to-green-50">
            <div class="container mx-auto px-4">
                <div class="flex flex-col md:flex-row items-center">
                    <div class="md:w-1/2 mb-10 md:mb-0 pr-4">
                        <h1 class="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight whitespace-pre-line">
                            Encontre o melhor cuidado, perto de quem você ama.
                        </h1>
                        <p class="text-xl text-gray-600 mb-8 max-w-md">
                            Conectamos você às melhores casas de repouso e clínicas de
                            recuperação em todo o Brasil.
                        </p>
                        <div class="relative max-w-md">
                            <input type="text" placeholder="Digite sua cidade ou CEP" class="pr-10 py-6 rounded-full shadow-md w-full" id="searchInput">
                            <button class="absolute right-0 top-0 h-full rounded-full px-4 bg-blue-600 hover:bg-blue-700 text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                            </button>
                            <div id="suggestions" class="hidden absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
                                <ul class="py-1" id="suggestionsList"></ul>
                            </div>
                        </div>
                    </div>
                    <div class="md:w-1/2 flex justify-center">
                        <div class="relative w-full max-w-xl">
                            <img src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80" alt="Video thumbnail" class="rounded-2xl shadow-xl w-full h-auto object-cover">
                            <div class="absolute inset-0 flex items-center justify-center" id="videoThumbnail">
                                <div class="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors cursor-pointer">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </div>
                            <video id="heroVideo" class="hidden rounded-2xl shadow-xl w-full h-auto object-cover" controls>
                                <source src="https://cdn.coverr.co/videos/coverr-doctor-using-laptop-5060/1080p.mp4" type="video/mp4">
                                Your browser does not support the video tag.
                            </video>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Services Section -->
        @include('components.services-section')
        
        <!-- Featured Listings Section -->
        @include('components.featured-listings')
        
        <!-- How It Works Section -->
        @include('components.how-it-works')
        
        <!-- Benefits Section -->
        @include('components.benefits')
        
        <!-- Testimonials Section -->
        @include('components.testimonials')
        
        <!-- News Feed Section -->
        @include('components.news-feed')
        
        <!-- Institution Registration Section -->
        @include('components.institution-registration')
    </main>

    <!-- Footer -->
    @include('components.footer')
</div>

<script>
    // Search functionality
    document.addEventListener('DOMContentLoaded', function() {
        const searchInput = document.getElementById('searchInput');
        const suggestions = document.getElementById('suggestions');
        const suggestionsList = document.getElementById('suggestionsList');
        const videoThumbnail = document.getElementById('videoThumbnail');
        const heroVideo = document.getElementById('heroVideo');

        // City suggestions
        const citySuggestions = [
            "São Paulo, SP",
            "Rio de Janeiro, RJ",
            "Belo Horizonte, MG",
            "Salvador, BA",
            "Brasília, DF"
        ];

        // Search input event handlers
        searchInput.addEventListener('input', function(e) {
            if (e.target.value.length > 2) {
                const filteredSuggestions = citySuggestions.filter(city => 
                    city.toLowerCase().includes(e.target.value.toLowerCase())
                );
                
                if (filteredSuggestions.length > 0) {
                    renderSuggestions(filteredSuggestions);
                    suggestions.classList.remove('hidden');
                } else {
                    suggestions.classList.add('hidden');
                }
            } else {
                suggestions.classList.add('hidden');
            }
        });

        searchInput.addEventListener('focus', function() {
            if (searchInput.value.length > 2) {
                suggestions.classList.remove('hidden');
            }
        });

        searchInput.addEventListener('blur', function() {
            setTimeout(() => suggestions.classList.add('hidden'), 200);
        });

        // Render suggestions
        function renderSuggestions(items) {
            suggestionsList.innerHTML = '';
            items.forEach((suggestion, index) => {
                const li = document.createElement('li');
                li.className = 'px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center';
                li.innerHTML = `
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-2 text-blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    ${suggestion}
                `;
                li.addEventListener('click', function() {
                    searchInput.value = suggestion;
                    suggestions.classList.add('hidden');
                });
                suggestionsList.appendChild(li);
            });
        }

        // Video player
        videoThumbnail.addEventListener('click', function() {
            videoThumbnail.classList.add('hidden');
            heroVideo.classList.remove('hidden');
            heroVideo.play();
        });
    });
</script>