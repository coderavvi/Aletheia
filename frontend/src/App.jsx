import { useState, useEffect } from 'react';
import Header from './components/Header';
import HowItWorks from './components/HowItWorks';
import SearchArea from './components/SearchArea';
import Result from './components/ui/Result';
import { verifyNews } from './api/http';

export default function App() {
  const [isResultavailble, setIsResultAvailable] = useState(false);
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function verifyNewsHandler() {
    setIsLoading(true);

    try {
      const result = await verifyNews(value);
      if (result) {
        setIsResultAvailable(true);
      }
      setData(result);
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }
    setValue('');
  }

  console.log('Data: ', data);

  return (
    <>
      <Header />
      <div className="px-[10%] mb-32">
        <SearchArea
          value={value}
          setValue={setValue}
          onSubmit={verifyNewsHandler}
          isLoading={isLoading}
        />
        {!isResultavailble ? (
          <HowItWorks />
        ) : (
          <Result verificationData={data.analysis} />
        )}
      </div>
    </>
  );
}
