# Prompt para Geração de Site Institucional

## Instruções
Este prompt permite gerar um site institucional completo baseado no modelo "Limpa Nome SPC e SERASA". Você só precisa editar os campos marcados como [EDITAR] para personalizar o site para seu segmento.

## Campos para Editar

- **Nome do Site**: Empresa de Pintura
- **Segmento**: Pintura

## Prompt Completo

Crie um site institucional completo para uma empresa de Pintura chamada "Empresa de Pintura". O site deve ser desenvolvido em React com TypeScript usando Vite como bundler e Tailwind CSS para estilização, junto com os componentes do Shadcn UI.

O site deve incluir:

1. **Header**:
   - Logo da empresa com o nome "Empresa de Pintura"
   - Menu de navegação com links para: Home, Empresa, Blog, FAQ, Contato
   - Botão de "Fale Conosco" destacado
   - Versão mobile com menu hambúrguer
   - Botão de "Orçamento" para mobile com animação de pulse e wiggle

2. **Menu de Categorias**:
   - Barra horizontal com categorias relacionadas ao segmento Pintura
   - Navegação com scroll horizontal em dispositivos móveis
   - Botões de navegação (setas) para rolar as categorias

3. **Banner Principal**:
   - Título chamativo relacionado ao Pintura
   - Subtítulo explicativo
   - Botão de call-to-action
   - Área para vídeo ou imagem de destaque
   - Fundo com overlay gradiente sobre imagem

4. **Seção de Serviços**:
   - Grid de 4 cards com serviços relacionados ao Pintura
   - Cada card deve ter imagem, título, descrição e botão
   - Efeito hover com elevação e sombra
   - Carrossel responsivo para visualização em dispositivos móveis

5. **Seção Sobre a Empresa**:
   - Imagem da empresa
   - Texto sobre a história e missão
   - Botão de contato

6. **Seção de Clientes e Parceiros**:
   - Grid de 4 logos/imagens de parceiros
   - Fundo com gradiente suave
   - Carrossel responsivo para visualização em dispositivos móveis

7. **Seção de FAQ**:
   - Componente de acordeão com perguntas e respostas comuns sobre Pintura
   - Imagem ilustrativa ao lado

8. **Seção de Equipe**:
   - Grid de 4 cards com fotos e informações de membros da equipe
   - Nome, cargo e foto para cada membro
   - Carrossel responsivo para visualização em dispositivos móveis

9. **Seção de Depoimentos**:
   - Grid de 4 cards com depoimentos de clientes
   - Nome, localização, texto do depoimento e avaliação em estrelas
   - Carrossel responsivo para visualização em dispositivos móveis

10. **Seção de Notícias**:
    - Carrossel de notícias relacionadas ao Pintura
    - Cada card deve ter imagem, data, fonte, título e link

11. **Seção de Newsletter**:
    - Campo para inscrição de email
    - Botão de inscrever-se
    - Fundo com gradiente em tons de azul

12. **Rodapé**:
    - Informações sobre a empresa
    - Links rápidos para navegação
    - Informações de contato (endereço, telefone, email)
    - Formulário de contato rápido
    - Ícones de redes sociais (Facebook, Instagram, Twitter, LinkedIn, YouTube, TikTok)
    - Copyright e informações legais

13. **Componentes Adicionais**:
    - Mapa interativo dos estados do Brasil com informações de atendimento
    - Feed de notícias com carrossel e cards

14. **Recursos Técnicos**:
    - Design responsivo para todos os tamanhos de tela
    - Detecção de dispositivos móveis para exibição de carrosséis
    - Animações suaves nos elementos interativos
    - Componentes reutilizáveis do Shadcn UI
    - Estilização com Tailwind CSS
    - Ícones do Lucide React

Use cores predominantemente em tons de azul para transmitir confiança e profissionalismo, com detalhes em verde e laranja para call-to-actions. O design deve ser moderno, limpo e profissional, adequado para uma empresa de Pintura.

## Estrutura de Arquivos

Mantenha a seguinte estrutura de arquivos:

```
src/
├── components/
│   ├── LandingPage.tsx (componente principal)
│   ├── NewsFeed.tsx (componente de feed de notícias)
│   ├── BrazilStatesMap.tsx (mapa interativo)
│   ├── ui/ (componentes do Shadcn UI)
│   └── styles.css (estilos específicos)
├── lib/
│   └── utils.ts (funções utilitárias)
├── App.tsx
└── main.tsx
```

## Implementação de Responsividade

Para garantir que o site seja totalmente responsivo, implemente:

1. **Detecção de Dispositivos Móveis**:
   ```typescript
   const [isMobile, setIsMobile] = useState(false);
   
   useEffect(() => {
     const checkIfMobile = () => {
       setIsMobile(window.innerWidth < 768);
     };
     
     checkIfMobile();
     window.addEventListener("resize", checkIfMobile);
     
     return () => {
       window.removeEventListener("resize", checkIfMobile);
     };
   }, []);
   ```

2. **Renderização Condicional**:
   ```typescript
   {isMobile ? (
     <Carousel className="w-full">
       <CarouselContent>
         {items.map((item, index) => (
           <CarouselItem key={index}>
             {/* Conteúdo do item */}
           </CarouselItem>
         ))}
       </CarouselContent>
       <CarouselPrevious />
       <CarouselNext />
     </Carousel>
   ) : (
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
       {items.map((item, index) => (
         <div key={index}>
           {/* Conteúdo do item */}
         </div>
       ))}
     </div>
   )}
   ```

Certifique-se de que o site seja totalmente responsivo e otimizado para SEO.
