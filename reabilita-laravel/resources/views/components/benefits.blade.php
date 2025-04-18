<!-- Benefícios para Usuários Section -->
<section id="beneficios" class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <div class="text-center mb-12">
            <h2 class="text-3xl font-bold text-gray-800 mb-4">
                Benefícios para Usuários na Busca por Casas de Repouso
            </h2>
            <p class="text-lg text-gray-600 max-w-3xl mx-auto">
                Plataforma gratuita para encontrar casas de repouso verificadas e
                de qualidade. A Reabilita oferece diversas vantagens para quem
                busca o melhor cuidado para seus familiares idosos e pacientes em
                recuperação:
            </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            @php
            $benefits = [
                [
                    "title" => "Instituições Verificadas",
                    "description" => "Todas as casas e clínicas passam por um processo de verificação para garantir a qualidade."
                ],
                [
                    "title" => "Avaliações Reais",
                    "description" => "Leia depoimentos de familiares que já utilizaram os serviços das instituições."
                ],
                [
                    "title" => "Busca Personalizada",
                    "description" => "Filtre por localização, tipo de cuidado, preço e serviços oferecidos."
                ],
                [
                    "title" => "Contato Direto",
                    "description" => "Comunique-se diretamente com as instituições sem intermediários."
                ],
                [
                    "title" => "Informações Detalhadas",
                    "description" => "Acesse fotos, descrições, serviços e diferenciais de cada instituição."
                ],
                [
                    "title" => "Suporte Humanizado",
                    "description" => "Nossa equipe está disponível para ajudar em todas as etapas do processo."
                ]
            ];
            @endphp

            @foreach ($benefits as $benefit)
            <div class="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors">
                <div class="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <div>
                    <h3 class="text-lg font-semibold text-gray-800 mb-2">
                        {{ $benefit['title'] }}
                    </h3>
                    <p class="text-gray-600">{{ $benefit['description'] }}</p>
                </div>
            </div>
            @endforeach
        </div>
    </div>
</section>