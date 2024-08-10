import { API_HEAD } from '@/utils/utils';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ScrollView, View } from 'react-native';
import DoctorCard from './DoctorCard';

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        const fetchDoctors = async () => {
            try {
                const response = await axios.get(`${API_HEAD}/user?roles=doctor`);
                setDoctors(response.data);
            } catch (error) {
                console.error('Error fetching doctors:', error);
            }
        };
        fetchDoctors();
    }, []);

  return (
    <View>
      <ScrollView>
        {doctors?.map((doctor: any) => (
            <DoctorCard key={doctor._id} user={doctor}/>
        ))}
      </ScrollView>
    </View>
  )
}

export default Doctors