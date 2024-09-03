import React, {useEffect, useState} from 'react';
import Layout from '@common/Layout';
import InfoCard from '@screens/homepage/components/InfoCard';
import {FlatList} from 'react-native';
import NoData from './components/NoData';

const Homepage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users',
      );

      const users = await response.json();
      setData(users);
    };

    fetchData();
  }, []);

  const renderItem = ({item}) => <InfoCard cardItem={item} />;

  return (
    <Layout title="Home">
      <FlatList
        data={data}
        renderItem={renderItem}
        ListEmptyComponent={() => <NoData />}
      />
    </Layout>
  );
};

export default Homepage;
