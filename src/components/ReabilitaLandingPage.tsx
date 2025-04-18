import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import NewsFeed from "@/components/NewsFeed";
import {
  Search,
  MapPin,
  Phone,
  Mail,
  Heart,
  Home,
  Shield,
  Star,
  ArrowRight,
  Check,
  ChevronRight,
  Users,
  Building,
  FileText,
  MessageCircle,
  Clock,
  Award,
  ThumbsUp,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Send,
  ArrowUpRight,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ReabilitaLandingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const playVideo = () => {
    setIsVideoPlaying(true);
    const videoElement = document.getElementById(
      "heroVideo",
    ) as HTMLVideoElement;
    if (videoElement) {
      videoElement.classList.remove("hidden");
      videoElement.play();
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Topo/Header */}
      <header className="w-full bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">Reabilita</div>
          <Button className="md:hidden lg:flex cta-button-pulse bg-orange-500 hover:bg-orange-600 text-white rounded-full px-6 mx-4">
            Quero Ajuda!
          </Button>
          <nav className="hidden md:flex space-x-6 items-center">
            <a
              href="#como-funciona"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Como Funciona
            </a>
            <a
              href="#beneficios"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Benefícios
            </a>
            <a
              href="#depoimentos"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Depoimentos
            </a>
            <a
              href="#contato"
              className="text-gray-600 hover:text-blue-600 transition-colors"
            >
              Contato
            </a>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-6">
              Login / Cadastro
            </Button>
          </nav>
          <Button className="md:hidden" variant="outline" aria-label="Menu">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-blue-50 to-green-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-10 md:mb-0 pr-4">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight whitespace-pre-line">
                  Encontre o melhor cuidado, perto de quem você ama.
                </h1>
                <p className="text-xl text-gray-600 mb-8 max-w-md">
                  Conectamos você às melhores casas de repouso e clínicas de
                  recuperação em todo o Brasil.
                </p>
                <div className="relative max-w-md">
                  <Input
                    type="text"
                    placeholder="Digite sua cidade ou CEP"
                    className="pr-10 py-6 rounded-full shadow-md"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      if (e.target.value.length > 2) {
                        // Simulate API call for city suggestions
                        const citySuggestions = [
                          "São Paulo, SP",
                          "Rio de Janeiro, RJ",
                          "Belo Horizonte, MG",
                          "Salvador, BA",
                          "Brasília, DF",
                        ].filter((city) =>
                          city
                            .toLowerCase()
                            .includes(e.target.value.toLowerCase()),
                        );
                        setSuggestions(citySuggestions);
                        setShowSuggestions(true);
                      } else {
                        setShowSuggestions(false);
                      }
                    }}
                    onFocus={() => {
                      if (searchQuery.length > 2) {
                        setShowSuggestions(true);
                      }
                    }}
                    onBlur={() => {
                      // Delay hiding to allow for clicks on suggestions
                      setTimeout(() => setShowSuggestions(false), 200);
                    }}
                  />
                  <Button className="absolute right-0 top-0 h-full rounded-full px-4 bg-blue-600 hover:bg-blue-700">
                    <Search className="h-5 w-5" />
                  </Button>

                  {showSuggestions && suggestions.length > 0 && (
                    <div className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg">
                      <ul className="py-1">
                        {suggestions.map((suggestion, index) => (
                          <li
                            key={index}
                            className="px-4 py-2 hover:bg-blue-50 cursor-pointer flex items-center"
                            onClick={() => {
                              setSearchQuery(suggestion);
                              setShowSuggestions(false);
                            }}
                          >
                            <MapPin className="h-4 w-4 mr-2 text-blue-500" />
                            {suggestion}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-xl">
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80"
                    alt="Video thumbnail"
                    className="rounded-2xl shadow-xl w-full h-auto object-cover"
                  />
                  {!isVideoPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center"
                      onClick={playVideo}
                    >
                      <div className="bg-red-600 rounded-full w-16 h-16 flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors cursor-pointer">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-8 w-8 text-white"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                  )}
                  <video
                    id="heroVideo"
                    className="hidden rounded-2xl shadow-xl w-full h-auto object-cover"
                    controls
                  >
                    <source
                      src="https://cdn.coverr.co/videos/coverr-doctor-using-laptop-5060/1080p.mp4"
                      type="video/mp4"
                    />
                    Your browser does not support the video tag.
                  </video>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Destaques de serviços oferecidos */}
        <section id="servicos" className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
              Conheça os serviços especializados que oferecemos para cuidados
              com idosos, incluindo casas de repouso, clínicas de recuperação e
              atendimento personalizado para cada necessidade.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Home className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                  Casas de Repouso
                </h3>
                <p className="text-gray-600 text-center">
                  Encontre casas de repouso com infraestrutura adequada, equipe
                  qualificada e ambiente acolhedor para seus entes queridos.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Shield className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                  Clínicas de Recuperação
                </h3>
                <p className="text-gray-600 text-center">
                  Acesse clínicas especializadas em reabilitação física,
                  neurológica e geriátrica com os melhores profissionais.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Heart className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-3">
                  Cuidado Personalizado
                </h3>
                <p className="text-gray-600 text-center">
                  Compare opções, leia avaliações e encontre o cuidado ideal que
                  atenda às necessidades específicas do seu familiar.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Listagem de Casas de Repouso */}
        <section id="listagem" className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
              Casas de Repouso em Destaque para Idosos e Pacientes em
              Recuperação
            </h2>
            <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
              Encontre casas de repouso para idosos com atendimento
              especializado, conforto e segurança. Conheça algumas das melhores
              opções disponíveis na sua região, todas verificadas pela nossa
              equipe de especialistas em cuidados geriátricos e reabilitação.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1586105251261-72a756497a11?w=800&q=80"
                    alt="Casa de Repouso Serenidade"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Heart className="h-5 w-5 text-red-500" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                          fill={i < 4 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      4.0 (32 avaliações)
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Casa de Repouso Serenidade - Cuidados 24h para idosos em São
                    Paulo
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">São Paulo, SP</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Ambiente acolhedor com equipe multidisciplinar, atividades
                    terapêuticas e atendimento 24h.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver Detalhes
                  </Button>
                </div>
              </div>

              {/* Card 2 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                    alt="Residencial Bem Viver"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Heart className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 5 ? "text-yellow-400" : "text-gray-300"}`}
                          fill={i < 5 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      5.0 (48 avaliações)
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Residencial Bem Viver - Moradia assistida para idosos no Rio
                    de Janeiro
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Rio de Janeiro, RJ</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Estrutura moderna com amplas áreas verdes, suítes privativas
                    e programação de atividades diárias.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver Detalhes
                  </Button>
                </div>
              </div>

              {/* Card 3 */}
              <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=800&q=80"
                    alt="Lar Esperança"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md">
                    <Heart className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
                <div className="p-5">
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < 4 ? "text-yellow-400" : "text-gray-300"}`}
                          fill={i < 4 ? "currentColor" : "none"}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600 ml-2">
                      4.2 (27 avaliações)
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    Lar Esperança - Assistência geriátrica especializada em Belo
                    Horizonte
                  </h3>
                  <div className="flex items-center text-gray-600 mb-3">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Belo Horizonte, MG</span>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm">
                    Atendimento humanizado com foco no bem-estar físico e
                    emocional, alimentação balanceada e monitoramento médico.
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Ver Detalhes
                  </Button>
                </div>
              </div>
            </div>

            <div className="text-center mt-10">
              <Button className="bg-white text-blue-600 border border-blue-600 hover:bg-blue-50 px-6 py-2 rounded-full inline-flex items-center">
                Ver Mais Opções
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Como Funciona Section */}
      <section
        id="como-funciona"
        className="py-16 bg-gradient-to-b from-white to-blue-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Como Funciona a Plataforma de Busca de Casas de Repouso
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Busque e compare casas de repouso de forma rápida e confiável.
              Encontrar o cuidado ideal para seu familiar nunca foi tão fácil.
              Siga estes passos simples:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Search className="h-10 w-10 text-blue-600" />,
                title: "Busque por Localidade",
                description:
                  "Digite sua cidade ou CEP para encontrar casas de repouso e clínicas próximas a você.",
                color: "bg-blue-50",
                iconBg: "bg-blue-100",
                step: "1",
              },
              {
                icon: <Building className="h-10 w-10 text-green-600" />,
                title: "Compare Instituições",
                description:
                  "Analise perfis detalhados, fotos, avaliações e serviços oferecidos por cada instituição.",
                color: "bg-green-50",
                iconBg: "bg-green-100",
                step: "2",
              },
              {
                icon: <MessageCircle className="h-10 w-10 text-purple-600" />,
                title: "Entre em Contato",
                description:
                  "Comunique-se diretamente com as instituições que mais se adequam às suas necessidades.",
                color: "bg-purple-50",
                iconBg: "bg-purple-100",
                step: "3",
              },
              {
                icon: <ThumbsUp className="h-10 w-10 text-orange-600" />,
                title: "Compartilhe sua Experiência",
                description:
                  "Após utilizar os serviços, deixe sua avaliação para ajudar outras famílias.",
                color: "bg-orange-50",
                iconBg: "bg-orange-100",
                step: "4",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`${item.color} rounded-xl p-6 relative shadow-sm hover:shadow-md transition-all duration-300`}
              >
                <div className="absolute -top-5 -left-5 w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold shadow-md">
                  {item.step}
                </div>
                <div
                  className={`${item.iconBg} w-20 h-20 rounded-full flex items-center justify-center mb-6 mx-auto`}
                >
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-center text-gray-800 mb-4">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios para Usuários Section */}
      <section id="beneficios" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Benefícios para Usuários na Busca por Casas de Repouso
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Plataforma gratuita para encontrar casas de repouso verificadas e
              de qualidade. A Reabilita oferece diversas vantagens para quem
              busca o melhor cuidado para seus familiares idosos e pacientes em
              recuperação:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Check className="h-6 w-6 text-green-600" />,
                title: "Instituições Verificadas",
                description:
                  "Todas as casas e clínicas passam por um processo de verificação para garantir a qualidade.",
              },
              {
                icon: <Check className="h-6 w-6 text-green-600" />,
                title: "Avaliações Reais",
                description:
                  "Leia depoimentos de familiares que já utilizaram os serviços das instituições.",
              },
              {
                icon: <Check className="h-6 w-6 text-green-600" />,
                title: "Busca Personalizada",
                description:
                  "Filtre por localização, tipo de cuidado, preço e serviços oferecidos.",
              },
              {
                icon: <Check className="h-6 w-6 text-green-600" />,
                title: "Contato Direto",
                description:
                  "Comunique-se diretamente com as instituições sem intermediários.",
              },
              {
                icon: <Check className="h-6 w-6 text-green-600" />,
                title: "Informações Detalhadas",
                description:
                  "Acesse fotos, descrições, serviços e diferenciais de cada instituição.",
              },
              {
                icon: <Check className="h-6 w-6 text-green-600" />,
                title: "Suporte Humanizado",
                description:
                  "Nossa equipe está disponível para ajudar em todas as etapas do processo.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start p-4 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                  {benefit.icon}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos Section */}
      <section id="depoimentos" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 text-center">
            Agradecemos a confiança dos nossos clientes, que nos permitem fazer
            parte de suas jornadas de recuperação e bem-estar.
          </p>

          <div className="relative overflow-hidden">
            <div className="flex gap-6 justify-center">
              {/* Testimonial 1 */}
              <div className="min-w-[350px] max-w-[350px] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-900 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Mizex"
                      alt="Mizex Cem"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Mizex Cem</h3>
                    <div className="flex text-green-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Super recomendo. Trabalho com bastante clareza na hora do
                    orçamento e manutenção. Atendimento muito bom do início ao
                    fim.
                  </p>
                </div>
              </div>

              {/* Testimonial 2 */}
              <div className="min-w-[350px] max-w-[350px] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-900 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Fabricio"
                      alt="Fabrício Rangel"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">
                      Fabrício Rangel
                    </h3>
                    <div className="flex text-green-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Atendimento muito bom, bem educados e deixando sempre bem
                    claro os serviços que serão realizado e também bem
                    flexíveis.
                  </p>
                </div>
              </div>

              {/* Testimonial 3 */}
              <div className="min-w-[350px] max-w-[350px] bg-gray-50 rounded-lg overflow-hidden shadow-md">
                <div className="bg-gray-900 p-6 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center overflow-hidden">
                    <img
                      src="https://api.dicebear.com/7.x/avataaars/svg?seed=Vagner"
                      alt="Vagner JM"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">Vagner JM</h3>
                    <div className="flex text-green-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" fill="currentColor" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">
                    Fui muito bem atendido pessoal nota 10. Explicaram e
                    mostraram os serviços que foram executados e mostraram as
                    peças com defeito.
                  </p>
                </div>
              </div>
            </div>

            {/* Navigation buttons */}
            <button className="absolute left-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10">
              <ChevronRight className="h-6 w-6 text-gray-600 rotate-180" />
            </button>
            <button className="absolute right-0 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 z-10">
              <ChevronRight className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-2">
            Notícias sobre Reabilitação
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8 text-center">
            Fique atualizado com as últimas notícias e artigos sobre saúde,
            reabilitação e cuidados com idosos para tomar as melhores decisões
            para sua família.
          </p>
          <NewsFeed searchQuery="reabilitação saúde idosos" />
        </div>
      </section>

      {/* Cadastro para Instituições Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-3xl font-bold mb-4">
                É proprietário de uma casa de repouso ou clínica de
                reabilitação?
              </h2>
              <p className="text-xl mb-6 text-blue-100">
                Aumente a ocupação da sua casa de repouso com novos clientes
                qualificados. Cadastre sua instituição gratuitamente na
                Reabilita e aumente sua visibilidade para potenciais clientes
                que buscam cuidados especializados para idosos.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Perfil completo da sua instituição",
                  "Receba contatos diretos de famílias interessadas",
                  "Destaque seus diferenciais e serviços",
                  "Gerencie avaliações e comentários",
                ].map((item, index) => (
                  <li key={index} className="flex items-center">
                    <div className="bg-blue-500 rounded-full p-1 mr-3">
                      <Check className="h-4 w-4" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 text-lg font-semibold rounded-full">
                Cadastrar Minha Instituição
                <ArrowUpRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=800&q=80"
                alt="Profissionais de saúde"
                className="rounded-xl shadow-lg max-w-md w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-16 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4">Sobre a Reabilita</h3>
              <p className="text-gray-400 mb-4">
                Somos uma plataforma que conecta famílias a casas de repouso e
                clínicas de reabilitação em todo o Brasil, facilitando a busca
                pelo cuidado ideal para seus entes queridos.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Youtube className="h-6 w-6" />
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#como-funciona"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Como Funciona
                  </a>
                </li>
                <li>
                  <a
                    href="#beneficios"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Benefícios
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Casas de Repouso
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Clínicas de Reabilitação
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    Para Instituições
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Contato</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-400">
                    Av. Paulista, 1000, São Paulo - SP
                  </span>
                </li>
                <li className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">(11) 4002-8922</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-gray-400" />
                  <span className="text-gray-400">
                    contato@reabilita.com.br
                  </span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba novidades e conteúdos sobre cuidados e reabilitação.
              </p>
              <div className="flex">
                <Input
                  placeholder="Seu e-mail"
                  className="bg-gray-800 border-gray-700 rounded-r-none"
                />
                <Button className="bg-blue-600 hover:bg-blue-700 rounded-l-none">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2023 Reabilita. Todos os direitos reservados.
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Política de Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Termos de Uso
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
