import { useState } from 'react';
import TextInput from './TextInput';
import Switch from './ui/Switch';
import Button from './ui/Button';

const SearchArea = ({ value, setValue, onSubmit, isLoading }) => {
  function setSearchBarHandler() {
    setSearchBar((prevState) => {
      if (prevState === 'url') {
        return 'text';
      } else {
        return 'url';
      }
    });
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h2 className="mt-16 mb-4 font-bold text-3xl md:text-4xl lg:text-5xl text-center">
          Detect Fake or Real News
        </h2>
        <p className="text-lg lg:text-xl text-center">
          Paste news text or submit a URL, and Aletheia will analyze the content
          for accuracy
        </p>
      </div>
      <div className="mb-6">
        <TextInput type={'text'} value={value} setValue={setValue} />
      </div>
      <div className=" mb-8 flex-1">
        <Button onClick={onSubmit}>
          {isLoading ? 'Analyzing...' : 'Analyze'}
        </Button>
      </div>
      <div className="flex flex-col justify-center items-center gap-4">
        <Switch onClick={setSearchBarHandler}></Switch>
      </div>
    </div>
  );
};

export default SearchArea;
