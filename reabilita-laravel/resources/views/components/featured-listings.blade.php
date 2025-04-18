<!-- Listagem de Casas de Repouso -->
<section id="listagem" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-gray-800 mb-4">
            Casas de Repouso em Destaque para Idosos e Pacientes em
            Recuperação
        </h2>
        <p class="text-gray-600 text-center max-w-2xl mx-auto mb-12">
            Encontre casas de repouso para idosos com atendimento
            especializado, conforto e segurança. Conheça algumas das melhores
            opções disponíveis na sua região, todas verificadas pela nossa
            equipe de especialistas em cuidados geriátricos e reabilitação.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Card 1 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80" alt="Casa de Repouso Serenidade" class="w-full h-48 object-cover">
                    <div class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-red-500" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center mb-2">
                        <div class="flex">
                            @for ($i = 0; $i < 5; $i++)
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 {{ $i < 4 ? 'text-yellow-400' : 'text-gray-300' }}" viewBox="0 0 24 24" fill="{{ $i < 4 ? 'currentColor' : 'none' }}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            @endfor
                        </div>
                        <span class="text-sm text-gray-600 ml-2">
                            4.0 (32 avaliações)
                        </span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                        Casa de Repouso Serenidade - Cuidados 24h para idosos em São
                        Paulo
                    </h3>
                    <div class="flex items-center text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span class="text-sm">São Paulo, SP</span>
                    </div>
                    <p class="text-gray-600 mb-4 text-sm">
                        Ambiente acolhedor com equipe multidisciplinar, atividades
                        terapêuticas e atendimento 24h.
                    </p>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Ver Detalhes
                    </button>
                </div>
            </div>

            <!-- Card 2 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="Residencial Bem Viver" class="w-full h-48 object-cover">
                    <div class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center mb-2">
                        <div class="flex">
                            @for ($i = 0; $i < 5; $i++)
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            @endfor
                        </div>
                        <span class="text-sm text-gray-600 ml-2">
                            5.0 (48 avaliações)
                        </span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                        Residencial Bem Viver - Moradia assistida para idosos no Rio
                        de Janeiro
                    </h3>
                    <div class="flex items-center text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span class="text-sm">Rio de Janeiro, RJ</span>
                    </div>
                    <p class="text-gray-600 mb-4 text-sm">
                        Estrutura moderna com amplas áreas verdes, suítes privativas
                        e programação de atividades diárias.
                    </p>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Ver Detalhes
                    </button>
                </div>
            </div>

            <!-- Card 3 -->
            <div class="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80" alt="Lar Esperança" class="w-full h-48 object-cover">
                    <div class="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                    </div>
                </div>
                <div class="p-5">
                    <div class="flex items-center mb-2">
                        <div class="flex">
                            @for ($i = 0; $i < 5; $i++)
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 {{ $i < 4 ? 'text-yellow-400' : 'text-gray-300' }}" viewBox="0 0 24 24" fill="{{ $i < 4 ? 'currentColor' : 'none' }}" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                            @endfor
                        </div>
                        <span class="text-sm text-gray-600 ml-2">
                            4.2 (27 avaliações)
                        </span>
                    </div>
                    <h3 class="text-xl font-semibold text-gray-800 mb-2">
                        Lar Esperança - Assistência geriátrica especializada em Belo
                        Horizonte
                    </h3>
                    <div class="flex items-center text-gray-600 mb-3">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                        <span class="text-sm">Belo Horizonte, MG</span>
                    </div>
                    <p class="text-gray-600 mb-4 text-sm">
                        Atendimento humanizado com foco no bem-estar físico e
                        emocional, alimentação balanceada e monitoramento médico.
                    </p>
                    <button class="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                        Ver Detalhes
                    </button>
                </div>
            </div>
        </div>

        <div class="text-center mt-10">
            <button class="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full inline-flex items-center">
                Ver Mais Opções
                <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </button>
        </div>
    </div>
</section>