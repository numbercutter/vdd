// src/pages/index.tsx
import { useState, useEffect } from 'react';
import { Box, Center, Spinner, Text, keyframes, Flex } from '@chakra-ui/react';

// Define keyframes for the spinning animation
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;
const hashtags = [
  "#mindfulness", "#meditation", "#awareness", "#consciousness", "#presence",
  "#brainwaves", "#neuroscience", "#brainpower", "#cognitive", "#neural",
  "#sacredgeometry", "#mandala", "#fractal", "#goldenratio", "#floweroflife",
  "#ancientwisdom", "#spirituality", "#ancientknowledge", "#esoteric", "#mysticism",
  "#soundscience", "#binauralbeats", "#soundhealing", "#frequency", "#vibration",
  "#mindfulthinking", "#mindfulmovement", "#mindfulbreathing", "#mindfulawareness", "#mindfultravel",
  "#meditationteachertraining", "#meditationtipsandtricks", "#meditationinspiration", "#meditationpractice",
  "#consciousnessshift", "#consciouscommunity", "#consciousawakening", "#consciousliving", "#consciouslife",
  "#brainhacks", "#braintrainingtips", "#cognitiverehabilitation", "#neuralplasticitytraining", "#neuroplasticityresearch",
  "#sacredgeometryjewelry", "#sacredgeometrytattoo", "#mandalapainting", "#fractalartwork", "#goldenratiopattern",
  "#floweroflifemandalas", "#ancientegypt", "#ancientcivilizations", "#spiritualgrowth", "#spiritualenlightenment",
  "#esotericphilosophy", "#mysticalteachings", "#soundscapes", "#binauralbeatsfrequency", "#soundtherapyhealing",
  "#frequencyhealing", "#vibrationtherapy", "#mindfulbeauty", "#mindfulwellness", "#mindfulnutrition", "#mindfulfitness",
  "#meditationmusician", "#meditationretreats", "#meditationcenter", "#consciousnesscoaching", "#consciousparenting",
  "#brainboosters", "#brainimprovement", "#cognitiveenhancement", "#neuralscience", "#sacredgeometrydesigns",
  "#mandaladesign", "#fractalgeometry", "#goldenratioart", "#floweroflifeartwork", "#ancientknowledgekeeper",
  "#spiritualjourneys", "#esotericmysticism", "#soundhealingtherapy", "#binauralbeatsmeditations", "#vibrationmedicine",
  "#mindfulleadership", "#mindfulentrepreneur", "#mindfulmanagement", "#meditationbenefitsresearch", "#consciousrelationships",
  "#braintraininggames", "#neuralstimulation", "#sacredgeometryartwork", "#mandalawallpaper", "#fractalnature",
  "#goldenratiophotography", "#floweroflifepatterns", "#ancienthealing", "#spiritualawakeningprocess",
  "#esotericwisdom", "#mysticalhealing", "#soundhealingmeditation", "#binauralbeatsmusic", "#vibrationhealing",
  "#mindfularttherapy", "#mindfulhiking", "#mindfulyoga", "#meditationfestival", "#consciouscommunitybuilding",
  "#brainwaveentrainment", "#neuroplasticityexercise", "#sacredgeometryartist", "#mandalastones", "#fractalpatterns",
  "#goldenratiogarden", "#floweroflifetattoos", "#ancienttexts", "#spiritualunderstanding", "#esoterictraditions",
  "#mysticalliving", "#soundhealingtherapy", "#binauralbeatstherapy", "#sobriety", "#sobrietyrocks", "#sobrietymatters", "#soberliving", "#sobersquad",
  "#soberaf", "#soberissexy", "#sobercommunity", "#sobermovement", "#sobrietyispossible",
  "#sobrietyjourney", "#soberlife", "#sobrietyquotes", "#sobercurious", "#soberafnation",
  "#goals", "#goalsetting", "#goalgetter", "#goalchaser", "#goaloriented",
  "#achievegoals", "#mindset", "#successmindset", "#motivation", "#inspiration",
  "#mindpower", "#determination", "#focus", "#hardworkpaysoff", "#nevergiveup",
  "#positivethinking", "#selfimprovement", "#personaldevelopment", "#lifegoals", "#dreambig",
  "#goalplanning", "#goaldigger", "#ambition", "#success", "#goalcrusher",
  "#goalplanner", "#goalinspiration", "#goaldriven", "#motivationmonday", "#successquotes",
  "#mindsetiseverything", "#mindsetquotes", "#motivationalquotes", "#inspirationalquotes", "#mindsetcoach",
  "#mindsetmatters", "#motivationalspeaker", "#successmindsettraining", "#inspirationalthoughts", "#motivationalthoughts",
  "#mindsetshift", "#mindsetofgreatness", "#goalsettingtips", "#achieveyourgoals", "#personalgrowth"
]
const glitchChars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890';

function generateGlitch() {
  let result = '';
  for (let i = 0; i < 20; i++) {
    result += glitchChars.charAt(Math.floor(Math.random() * glitchChars.length));
  }
  return result;
}

export default function HomePage() {
  const [loading, setLoading] = useState(true);
  const [glitch, setGlitch] = useState(generateGlitch());

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // loading for 2 seconds

    const glitchInterval = setInterval(() => {
      setGlitch(generateGlitch());
    }, 500); // glitch effect changes every 500ms

    return () => {
      clearTimeout(timer);
      clearInterval(glitchInterval);
    }
  }, []);

  if (loading) {
    return (
      <Center height="100vh">
        <Spinner />
      </Center>
    );
  }

  return (
    <Center height="100vh">
      <Flex flexDirection="column" alignItems="center" justifyContent="center"
        p={6} borderWidth={1} borderRadius="md" bg="white" color="black"
        maxW={['90%', '80%', '70%', '60%']} w="full" overflow="auto">
        <Text fontSize={["3xl", "4xl", "5xl", "6xl"]}>Virtual Drug Dealer</Text>
        <Box
          w={["30px", "35px", "40px", "50px"]}
          h={["10px", "12px", "15px", "20px"]}
          borderRadius="50px"
          bgColor="brand.400"
          marginTop="2rem"
          animation={`${spin} 2s linear infinite`}
        />
        <Text textAlign="center" color="brand.500" marginTop="2rem" fontFamily="monospace">
          <pre>{glitch}</pre>
        </Text>
      </Flex>
    </Center>
  );
}