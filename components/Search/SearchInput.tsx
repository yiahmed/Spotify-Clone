'use client';

import qs from 'query-string';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Input from '../Modal/Input';

import useDebounce from '@/hooks/useDebounce';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 500);

  useEffect(() => {
    const query = {
      title: debouncedValue,
    };

    const url = qs.stringifyUrl({
      url: '/search',
      query,
    });

    router.push(url);
  }, [debouncedValue]);

  return (
    <Input
      placeholder="What do you want to listen to?"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default SearchInput;
