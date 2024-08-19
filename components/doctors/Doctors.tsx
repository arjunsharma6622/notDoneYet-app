import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { RefreshControl, ScrollView, View } from 'react-native';
import DoctorCard from './DoctorCard';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);
  const [isFetching, setIsFetching] = useState(true);

  const fetchDoctors = async () => {
    try {
      setIsFetching(true)
      const response = await axios.get(`/user?roles=doctor`);
      setDoctors(response.data.data.users);
    } catch (error) {
      console.error('Error fetching doctors:', error);
    } finally {
      setIsFetching(false)
    }
  };
  useEffect(() => {
    fetchDoctors();
  }, []);

  return (
    <View>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={isFetching} onRefresh={fetchDoctors} />
        }
        showsVerticalScrollIndicator={false}
        className='h-full'
      >
        {doctors?.map((doctor: any) => (
          <DoctorCard key={doctor._id} user={doctor} />
        ))}
      </ScrollView>
    </View>
  )
}

export default Doctors