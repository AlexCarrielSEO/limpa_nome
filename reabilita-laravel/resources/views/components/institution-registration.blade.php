<!-- Cadastro para Instituições Section -->
<section class="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    <div class="container mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 mb-8 md:mb-0">
                <h2 class="text-3xl font-bold mb-4">
                    É proprietário de uma casa de repouso ou clínica de
                    reabilitação?
                </h2>
                <p class="text-xl mb-6 text-blue-100">
                    Aumente a ocupação da sua casa de repouso com novos clientes
                    qualificados. Cadastre sua instituição gratuitamente na
                    Reabilita e aumente sua visibilidade para potenciais clientes
                    que buscam cuidados especializados para idosos.
                </p>
                <ul class="space-y-3 mb-8">
                    @foreach (['Perfil completo da sua instituição', 'Receba contatos diretos de famílias interessadas', 'Destaque seus diferenciais e serviços', 'Gerencie avaliações e comentários'] as $item)
                        <li class="flex items-center">
                            <div class="bg-blue-500 rounded-full p-1 mr-3">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                            </div>
                            {{ $item }}
                        </li>
                    @endforeach
                </ul>
                <button class="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full">
                    Cadastrar Minha Instituição
                    <svg xmlns="http://www.w3.org/2000/svg" class="ml-2 h-5 w-5 inline" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="7" y1="17" x2="17" y2="7"></line><polyline points="7 7 17 7 17 17"></polyline></svg>
                </button>
            </div>
            <div class="md:w-1/2 flex justify-center">
                <img src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80" alt="Profissionais de saúde" class="rounded-xl shadow-lg max-w-md w-full">
            </div>
        </div>
    </div>
</section>