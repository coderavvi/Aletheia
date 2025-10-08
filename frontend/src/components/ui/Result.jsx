import { FaRegNewspaper } from 'react-icons/fa6';

import Heading from '../Heading';
import Card from './Card';
import Button from './Button';
import { useState } from 'react';
import { verifyNews } from '../../api/http';

export default function Result({ verificationData }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center gap-4 mt-12">
        <Heading>
          Credibility <span className="text-[#167d86]">Score</span>{' '}
        </Heading>
        <span className="text-[#167d86]">
          <FaRegNewspaper size={30} />
        </span>
      </div>

      <div className="w-[52%]">
        <Card>
          <div>
            <h2 className="text-center text-8xl mb-8 text-[#167d86]">
              {`${verificationData?.credibility_score}`}%
            </h2>
            <div className="flex justify-center mb-16 text-[#167d86] font-medium uppercase">
              {verificationData.final_verdict}
            </div>
            <div>
              {verificationData?.explanations?.map((item, index) => (
                <p key={index}>{item}</p>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
