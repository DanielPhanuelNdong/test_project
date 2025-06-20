import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../styles/SkipSizePage.css"
import image from "../assets/image_skip.jpeg"
import StepProgress from '../components/StepProgress';
import SkipCard from '../components/SkipCard';
import { apiClient } from '../services/BaseApi';
import BottomBar from '../components/BottomBar';



const SkipSizePage = () => {

    const [loading, setLoading] = useState(false);
    const currentStep = 2; // "Select Skip"
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await apiClient.get('/skips/by-location?postcode=NR32&area=Lowestoft');
                setDatas(response.data);
            } catch (error) {
                console.error("Erreur lors du chargement des contacts :", error.response?.data || error.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    const [selectedSkip, setSelectedSkip] = useState(null);

    const handleSelect = (skip) => {
        if (selectedSkip?.id === skip.id) {
            setSelectedSkip(null);
        } else {
            setSelectedSkip(skip);
        }
    };

    const handleBack = () => {
        console.log('Retour en arrière');
    };

    const handleContinue = () => {
        console.log('Continuer');
    };

    return (
        <>
            <div className="container pb-5 pt-1">

                {loading ? (
                    <div className="text-center py-2">
                        <div className="spinner-border text-primary" role="status">
                            <span className="visually-hidden">Chargement...</span>
                        </div>
                    </div>
                ) : (
                    <div>
                        <div className='d-flex align-content-center justify-content-center mb-4 '>
                            <StepProgress currentStep={currentStep} />
                        </div>
                        <h3 className="text-center fw-bold text-white mt-4">Choose Your <span className="text-primary">Skip</span> Size</h3>
                        <p className="text-center text-secondary mb-4">Select the skip size that best suits your needs</p>

                        <div className="row g-4 align-content-center align-self-center justify-content-center text-center">
                            {datas.map((data) => (
                                <div key={data.id} className="col-12 col-sm-6 col-md-4 d-flex justify-content-center align-items-center text-center">
                                    <SkipCard
                                        skip={data}
                                        selected={selectedSkip?.id === data.id}
                                        onSelect={handleSelect}
                                        image={image}
                                    />
                                </div>
                            ))}
                        </div>

                    </div>

                )
                }

                {/* Bottom Bar */}
                <BottomBar
                    selectedSkip={selectedSkip}
                    onBack={handleBack}
                    onContinue={handleContinue}
                />

            </div>
        </>
    );

};

export default SkipSizePage;