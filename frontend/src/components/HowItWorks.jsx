import { FaHourglassEnd } from "react-icons/fa";

import Heading from "./Heading";
import Card from "./ui/Card";

const HowItWorks = () => {
  return (
    <div className="my-8">
      <Heading>
        How it <span className="text-[#167d86]">Works</span>
      </Heading>
      <div className="flex justify-center flex-col md:flex-row gap-4 flex-wrap">
        <Card>
          <h2 className="text-xl font-semibold py-2 px-4 bg-[#167d8690] inline rounded-full">
            1
          </h2>
          <h2 className="font-semibold text-xl mt-4">Submit</h2>
          <p className="text-gray-500">
            Enter the news URL or news article text.
          </p>
        </Card>{" "}
        <Card>
          <h2 className="text-xl font-semibold py-2 px-4 bg-[#167d8690] inline rounded-full">
            2
          </h2>
          <h2 className="font-semibold text-xl mt-4">Analyze</h2>
          <p className="text-gray-500">Aletheia assesses the contents.</p>
        </Card>
        <Card>
          <h2 className="text-xl font-semibold py-2 px-4 bg-[#167d8690] inline rounded-full">
            3
          </h2>
          <h2 className="font-semibold text-xl mt-4">Get Results</h2>
          <p className="text-gray-500">
            View the verdict and confidence score by Aletheia
          </p>
        </Card>
      </div>
    </div>
  );
};

export default HowItWorks;
