<!-- News Feed Section -->
<section class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-2">
            Notícias sobre Reabilitação
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Fique atualizado com as últimas notícias e artigos sobre saúde,
            reabilitação e cuidados com idosos para tomar as melhores decisões
            para sua família.
        </p>
        
        <div class="w-full py-10" id="news-container">
            <div class="w-full max-w-4xl mx-auto divide-y divide-gray-100" id="news-items">
                <!-- News items will be loaded here -->
            </div>
            
            <div id="loading-skeleton" class="w-full max-w-4xl mx-auto">
                @for ($i = 0; $i < 4; $i++)
                    <div class="flex flex-col md:flex-row gap-4 mb-4 p-4 border-b border-gray-100">
                        <div class="w-full md:w-1/4 h-32 bg-gray-200 animate-pulse rounded-lg"></div>
                        <div class="w-full md:w-3/4">
                            <div class="h-4 bg-gray-200 rounded animate-pulse mb-2 w-1/4"></div>
                            <div class="h-6 bg-gray-200 rounded animate-pulse mb-2"></div>
                            <div class="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
                        </div>
                    </div>
                @endfor
            </div>
            
            <div class="text-center mt-8 hidden" id="load-more-container">
                <button id="load-more-button" class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full">
                    Ver Mais Notícias
                </button>
            </div>
            
            <div id="error-message" class="text-center text-sm text-gray-500 mt-4 hidden"></div>
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const newsItems = document.getElementById('news-items');
        const loadingSkeleton = document.getElementById('loading-skeleton');
        const loadMoreContainer = document.getElementById('load-more-container');
        const loadMoreButton = document.getElementById('load-more-button');
        const errorMessage = document.getElementById('error-message');
        
        let visibleItems = 6;
        let allNews = [];
        
        // Fallback data in case the API fails
        const fallbackNews = [
            {
                title: "Novas técnicas de reabilitação para pacientes pós-AVC mostram resultados promissores",
                link: "#",
                pubDate: "15/05/2023",
                image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=500&q=80",
                source: "Saúde em Dia"
            },
            {
                title: "Fisioterapia domiciliar: como encontrar o profissional ideal para idosos",
                link: "#",
                pubDate: "02/06/2023",
                image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
                source: "Portal da Saúde"
            },
            {
                title: "Casas de repouso investem em programas de reabilitação cognitiva",
                link: "#",
                pubDate: "20/06/2023",
                image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
                source: "Jornal da Terceira Idade"
            },
            {
                title: "Reabilitação cardíaca: especialistas recomendam início precoce do tratamento",
                link: "#",
                pubDate: "25/06/2023",
                image: "https://images.unsplash.com/photo-1559757175-7cb057fba93c?w=500&q=80",
                source: "Saúde do Coração"
            },
            {
                title: "Tecnologia e reabilitação: aplicativos que auxiliam no tratamento domiciliar",
                link: "#",
                pubDate: "30/06/2023",
                image: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=500&q=80",
                source: "Tech Saúde"
            },
            {
                title: "Reabilitação neurológica: novos protocolos melhoram qualidade de vida de pacientes",
                link: "#",
                pubDate: "05/07/2023",
                image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=500&q=80",
                source: "Neurociência Hoje"
            },
            {
                title: "Como escolher a melhor clínica de reabilitação para seu familiar idoso",
                link: "#",
                pubDate: "10/07/2023",
                image: "https://images.unsplash.com/photo-1576765608866-5b51046452be?w=500&q=80",
                source: "Guia da Terceira Idade"
            },
            {
                title: "Reabilitação pós-COVID: o que esperar e como encontrar tratamento adequado",
                link: "#",
                pubDate: "15/07/2023",
                image: "https://images.unsplash.com/photo-1584634731339-252c581abfc5?w=500&q=80",
                source: "Saúde Respiratória"
            }
        ];
        
        // Function to fetch news
        async function fetchNews() {
            try {
                // In a real Laravel app, we would use an API endpoint
                // For now, we'll use the fallback data directly
                setTimeout(() => {
                    allNews = fallbackNews;
                    loadingSkeleton.classList.add('hidden');
                    renderNews();
                    
                    if (visibleItems < allNews.length) {
                        loadMoreContainer.classList.remove('hidden');
                    }
                }, 1500); // Simulate loading delay
                
            } catch (err) {
                console.error("Error fetching news:", err);
                errorMessage.textContent = "Não foi possível carregar as notícias. Usando dados de exemplo.";
                errorMessage.classList.remove('hidden');
                loadingSkeleton.classList.add('hidden');
                
                allNews = fallbackNews;
                renderNews();
                
                if (visibleItems < allNews.length) {
                    loadMoreContainer.classList.remove('hidden');
                }
            }
        }
        
        // Function to render news items
        function renderNews() {
            newsItems.innerHTML = '';
            
            allNews.slice(0, visibleItems).forEach((item, index) => {
                const newsItem = document.createElement('div');
                newsItem.className = 'flex flex-col md:flex-row gap-4 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors';
                newsItem.innerHTML = `
                    <div class="w-full md:w-1/4">
                        <img src="${item.image}" alt="${item.title}" class="w-full h-32 object-cover rounded-lg">
                    </div>
                    <div class="w-full md:w-3/4 flex flex-col">
                        <div class="flex items-center mb-1">
                            <span class="text-xs font-medium text-green-700 bg-green-50 px-2 py-0.5 rounded">
                                ${item.source}
                            </span>
                            <span class="text-xs text-gray-500 ml-2">
                                ${item.pubDate}
                            </span>
                        </div>
                        <h3 class="text-lg font-bold mb-1 text-gray-800">
                            ${item.title}
                        </h3>
                        <a href="${item.link}" target="_blank" rel="noopener noreferrer" class="mt-auto">
                            <button class="text-blue-600 p-0 h-auto text-sm">
                                Ler mais
                            </button>
                        </a>
                    </div>
                `;
                newsItems.appendChild(newsItem);
            });
        }
        
        // Load more button event listener
        loadMoreButton.addEventListener('click', function() {
            visibleItems = Math.min(visibleItems + 2, allNews.length);
            renderNews();
            
            if (visibleItems >= allNews.length) {
                loadMoreContainer.classList.add('hidden');
            }
        });
        
        // Initial fetch
        fetchNews();
    });
</script>