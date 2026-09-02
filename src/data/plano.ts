import {
  Activity,
  Banknote,
  Brain,
  Briefcase,
  Building2,
  CarFront,
  ClipboardCheck,
  GraduationCap,
  HandCoins,
  HandHeart,
  HardHat,
  HeartPulse,
  Lightbulb,
  Rocket,
  ScrollText,
  Stethoscope,
  Timer,
  Users,
  UsersRound,
  type LucideIcon,
} from "lucide-react";

export type Proposta = {
  numero: string;
  Icon: LucideIcon;
  titulo: string;
  objetivo?: string;
  acoes: string[];
};

export type Eixo = {
  id: string;
  numero: string;
  Icon: LucideIcon;
  titulo: string;
  chamada: string;
  intro: string;
  propostas: Proposta[];
  indicadores: string[];
};

export const eixosPlano: Eixo[] = [
  {
    id: "eixo-saude",
    numero: "01",
    Icon: Stethoscope,
    titulo: "Saúde",
    chamada: "Reduzir filas, fortalecer a atenção primária, cuidar da saúde mental e valorizar os profissionais da saúde.",
    intro:
      "A saúde será um dos braços fortes do nosso mandato. Mais do que buscar recursos, é preciso melhorar a gestão, acompanhar resultados e fazer o atendimento chegar a quem precisa.",
    propostas: [
      {
        numero: "01",
        Icon: Timer,
        titulo: "Redução das Filas",
        objetivo: "Reduzir o tempo de espera por consultas, exames e procedimentos.",
        acoes: [
          "Monitorar o cumprimento da legislação relacionada às filas do SUS",
          "Direcionar emendas para mutirões regionalizados de cirurgias e exames de alta complexidade",
          "Acompanhar indicadores de tempo de espera",
        ],
      },
      {
        numero: "02",
        Icon: HeartPulse,
        titulo: "Fortalecimento da Atenção Primária",
        objetivo: "Fortalecer a porta de entrada do sistema de saúde.",
        acoes: [
          "Incentivar programas estaduais de residência em Medicina de Família",
          "Valorizar as equipes de Saúde da Família",
          "Fortalecer ações preventivas",
        ],
      },
      {
        numero: "03",
        Icon: Brain,
        titulo: "Saúde Mental e Dependência Química",
        objetivo: "Ampliar a estrutura de atendimento e prevenção.",
        acoes: [
          "Fortalecer e estruturar os CAPS",
          "Melhorar o atendimento relacionado à dependência química",
          "Apoiar ações de prevenção ao suicídio",
        ],
      },
      {
        numero: "04",
        Icon: CarFront,
        titulo: "Medicina do Tráfego e Prevenção",
        objetivo: "Utilizar conhecimento técnico e dados para melhorar a segurança no trânsito.",
        acoes: [
          "Incentivar educação para o trânsito",
          "Apoiar ações de prevenção",
          "Contribuir para a redução de acidentes e mortes nas rodovias",
        ],
      },
      {
        numero: "05",
        Icon: UsersRound,
        titulo: "Valorização dos Profissionais da Saúde",
        objetivo: "Melhorar as condições de trabalho dos profissionais.",
        acoes: [
          "Incentivar ambientes de trabalho mais seguros",
          "Acompanhar condições de atendimento",
          "Valorizar médicos, enfermeiros e demais profissionais",
        ],
      },
    ],
    indicadores: [
      "Tempo médio de espera no SUS",
      "Estrutura da rede de saúde mental",
      "Cobertura da Estratégia Saúde da Família",
      "Número de acidentes e mortes no trânsito",
    ],
  },
  {
    id: "eixo-empreendedorismo",
    numero: "02",
    Icon: Rocket,
    titulo: "Empreendedorismo e Oportunidades",
    chamada: "Menos burocracia, mais acesso ao crédito, educação empreendedora e incentivo à inovação.",
    intro:
      "Santa Catarina tem vocação para empreender. Nosso compromisso é facilitar para quem quer produzir, investir, contratar e gerar riqueza.",
    propostas: [
      {
        numero: "06",
        Icon: ClipboardCheck,
        titulo: "Desburocratização",
        acoes: [
          "Digitalizar processos",
          "Simplificar procedimentos",
          "Facilitar licenças para atividades de baixo risco",
        ],
      },
      {
        numero: "07",
        Icon: HandCoins,
        titulo: "Acesso ao Crédito",
        acoes: [
          "Criar mecanismos estaduais de garantia",
          "Facilitar o acesso a financiamento",
          "Ampliar oportunidades para pequenos empreendedores",
        ],
      },
      {
        numero: "08",
        Icon: GraduationCap,
        titulo: "Educação Empreendedora",
        acoes: [
          "Incentivar educação financeira",
          "Estimular cultura empreendedora nas escolas estaduais",
          "Preparar jovens para o mercado de trabalho",
        ],
      },
      {
        numero: "09",
        Icon: Lightbulb,
        titulo: "Inovação",
        acoes: [
          "Incentivar polos tecnológicos regionais",
          "Aproximar universidades e empresas",
          "Estimular startups e inovação no setor produtivo",
        ],
      },
    ],
    indicadores: [
      "Tempo para abertura de empresas",
      "Acesso ao crédito para pequenos negócios",
      "Formalização de empresas",
      "Desenvolvimento dos ecossistemas regionais de inovação",
    ],
  },
  {
    id: "eixo-trabalhador",
    numero: "03",
    Icon: HardHat,
    titulo: "O Trabalhador Honesto",
    chamada: "Geração de emprego, qualificação profissional e oportunidades para quem está começando.",
    intro:
      "Santa Catarina cresceu com trabalho, produção e responsabilidade. Nosso mandato deverá apoiar quem trabalha, produz e busca oportunidades para crescer.",
    propostas: [
      {
        numero: "10",
        Icon: Briefcase,
        titulo: "Geração de Emprego e Renda",
        acoes: [
          "Incentivos vinculados à geração efetiva de empregos",
          "Consideração das necessidades de cada região",
          "Estímulo à expansão das atividades produtivas",
        ],
      },
      {
        numero: "11",
        Icon: GraduationCap,
        titulo: "Qualificação Profissional",
        acoes: [
          "Parcerias com o Sistema S",
          "Ampliação de cursos técnicos",
          "Formação alinhada às necessidades das empresas e da indústria",
        ],
      },
      {
        numero: "12",
        Icon: Users,
        titulo: "Primeiro Emprego",
        acoes: [
          "Incentivos para empresas que contratem jovens sem experiência",
          "Estímulo à entrada de jovens no mercado de trabalho",
          "Aproximação entre formação e oportunidades profissionais",
        ],
      },
    ],
    indicadores: [
      "Número de empregos gerados",
      "Taxa de informalidade",
      "Pessoas qualificadas",
      "Inserção de jovens no mercado de trabalho",
    ],
  },
  {
    id: "eixo-politica-limpa",
    numero: "04",
    Icon: HandHeart,
    titulo: "Política Limpa",
    chamada: "Transparência, eficiência, fiscalização e prestação de contas.",
    intro:
      "Política precisa ser sinônimo de responsabilidade, transparência e prestação de contas.",
    propostas: [
      {
        numero: "13",
        Icon: ScrollText,
        titulo: "Transparência das Emendas",
        acoes: [
          "Tornar públicos os recursos destinados",
          "Permitir acompanhamento da aplicação",
          "Monitorar resultados",
        ],
      },
      {
        numero: "14",
        Icon: Banknote,
        titulo: "Eficiência e Economia",
        acoes: [
          "Fiscalizar contratos",
          "Combater desperdícios",
          "Acompanhar a eficiência dos gastos públicos",
        ],
      },
      {
        numero: "15",
        Icon: Building2,
        titulo: "Mandato Aberto",
        acoes: [
          "Realizar encontros regionais",
          "Promover audiências públicas",
          "Prestar contas periodicamente",
          "Ampliar a participação da população",
        ],
      },
    ],
    indicadores: [
      "Destinação das emendas",
      "Resultados alcançados",
      "Eficiência e economia do mandato",
      "Periodicidade da prestação de contas",
      "Participação popular",
    ],
  },
];

export const pilares = [
  {
    numero: "01",
    chave: "Cuidar",
    Icon: HeartPulse,
    titulo: "Saúde",
    texto:
      "Melhorar o atendimento, reduzir filas e fortalecer a prevenção e a atenção à saúde.",
  },
  {
    numero: "02",
    chave: "Gerar",
    Icon: Activity,
    titulo: "Empreendedorismo e oportunidades",
    texto:
      "Facilitar a criação de negócios, estimular investimentos, inovação, emprego e renda.",
  },
  {
    numero: "03",
    chave: "Servir",
    Icon: HandHeart,
    titulo: "Política limpa e eficiente",
    texto:
      "Transparência, fiscalização e responsabilidade na utilização dos recursos públicos.",
  },
];

export const compromissosPlano = [
  { numero: "01", area: "Saúde", texto: "Reduzir a espera." },
  { numero: "02", area: "Economia", texto: "Facilitar para quem empreende." },
  { numero: "03", area: "Trabalho", texto: "Gerar oportunidades." },
  { numero: "04", area: "Política", texto: "Transparência e prestação de contas." },
];
