<!-- Depoimentos Section -->
<section id="depoimentos" class="py-16 bg-white">
    <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold text-center text-green-500 mb-4">
            O que nossos clientes dizem
        </h2>
        <p class="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Agradecemos a confiança dos nossos clientes, que nos permitem fazer
            parte de suas jornadas de recuperação e bem-estar.
        </p>

        <div class="relative overflow-hidden">
            <div class="flex gap-6 justify-center" id="testimonials-container">
                <!-- Testimonial 1 -->
                <div class="min-w-[350px] max-w-[350px] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div class="bg-gray-900 p-6 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mizex" alt="Mizex Cem" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h3 class="text-white font-semibold">Mizex Cem</h3>
                            <div class="flex text-green-400">
                                @for ($i = 0; $i < 5; $i++)
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                @endfor
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-600">
                            Super recomendo. Trabalho com bastante clareza na hora do
                            orçamento e manutenção. Atendimento muito bom do início ao
                            fim.
                        </p>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="min-w-[350px] max-w-[350px] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div class="bg-gray-900 p-6 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fabricio" alt="Fabrício Rangel" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h3 class="text-white font-semibold">
                                Fabrício Rangel
                            </h3>
                            <div class="flex text-green-400">
                                @for ($i = 0; $i < 5; $i++)
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                @endfor
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-600">
                            Atendimento muito bom, bem educados e deixando sempre bem
                            claro os serviços que serão realizado e também bem
                            flexíveis.
                        </p>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="min-w-[350px] max-w-[350px] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                    <div class="bg-gray-900 p-6 flex items-center gap-4">
                        <div class="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vagner" alt="Vagner JM" class="w-full h-full object-cover">
                        </div>
                        <div>
                            <h3 class="text-white font-semibold">Vagner JM</h3>
                            <div class="flex text-green-400">
                                @for ($i = 0; $i < 5; $i++)
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                                @endfor
                            </div>
                        </div>
                    </div>
                    <div class="p-6">
                        <p class="text-gray-600">
                            Fui muito bem atendido pessoal nota 10. Explicaram e
                            mostraram os serviços que foram executados e mostraram as
                            peças com defeito.
                        </p>
                    </div>
                </div>
            </div>

            <!-- Navigation buttons -->
            <button id="prev-testimonial" class="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600 rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <button id="next-testimonial" class="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-600" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
            </button>
        </div>
    </div>
</section>

<script>
    document.addEventListener('DOMContentLoaded', function() {
        const container = document.getElementById('testimonials-container');
        const prevButton = document.getElementById('prev-testimonial');
        const nextButton = document.getElementById('next-testimonial');
        
        let scrollAmount = 0;
        const cardWidth = 350 + 24; // card width + gap
        
        prevButton.addEventListener('click', function() {
            scrollAmount = Math.max(scrollAmount - cardWidth, 0);
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
        
        nextButton.addEventListener('click', function() {
            scrollAmount = Math.min(scrollAmount + cardWidth, container.scrollWidth - container.clientWidth);
            container.scrollTo({
                left: scrollAmount,
                behavior: 'smooth'
            });
        });
    });
</script>