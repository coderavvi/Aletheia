import { useState } from 'react';

const TextInput = ({ type, value, setValue }) => {
  function textChangeHandler(event) {
    setValue(event.target.value);
  }

  console.log('value in TextInput:', value);

  let content = (
    <input
      type="url"
      name="url"
      placeholder="Enter URL "
      onChange={textChangeHandler}
      value={value}
      className="border-[1px] border-[#167d86] rounded-md px-2 py-4 text-lg min-w-[400px] md:min-w-[600px] lg:min-w-[800px] mt-8 bg-[#f5f5f5] shadow-md"
    />
  );

  if (type === 'text') {
    content = (
      <textarea
        onChange={textChangeHandler}
        value={value}
        name="text"
        rows={3}
        placeholder="Paste news article text here..."
        className="border-[1px] border-[#35abb6] rounded-md px-2 py-4 text-lg min-w-[400px] md:min-w-[600px] lg:min-w-[800px] mt-8 bg-[#f5f5f5] shadow-md"
      />
    );
  }

  return <div className="w-full">{content}</div>;
};

export default TextInput;
