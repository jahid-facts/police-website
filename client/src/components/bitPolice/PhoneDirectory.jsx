
import { useEffect, useState } from 'react';
import DomDaines from '../../assets/DomDaines.png';
import axios from 'axios';
import imgUrl from '../../imgUrl';

const PhoneDirectory = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [subCategories, setSubCategories] = useState([]);
    const [subCategoriesData, setSubCategoriesData] = useState([]);
    const [options, setOptions] = useState([]);
    const [update, setUpdate] = useState(false);
    useEffect(() => {
        axios.get(`directory-categories`)
            .then((res) => {
                setOptions(res.data);
                setSelectedOption(res?.data[0]?.categories);
            })
    }, [])

    // Handler function to update the selected option
    const handleOptionChange = (event) => {
        const data = options.find((option) => parseInt(option.id) === parseInt(event.target.value));
        setSelectedOption(data.categories);
        setSubCategories(data.sub_categories);
        setUpdate(data.id)
    };
    const handleSubOptionChange = (event) => {
        const data = subCategories.find((option) => parseInt(option.id) === parseInt(event.target.value));
        setSubCategoriesData(data.directories);
    };



    // Handler function to reset the dropdown selection
    const handleResetClick = () => {
        setSelectedOption(options[0]?.categories);
        setSubCategories([]);
        setSubCategoriesData([]);
        setUpdate(options[0]?.id)
    };
    console.log(subCategoriesData, "subCategories");
    return (
        <div className="container pt-2">
            <h6 className="fw-bold text-center">পুলিশ ফোন ডিরেক্টরি, কিশোরগঞ্জ</h6>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="app__form__row">
                        <div className="d-flex align-items-center">
                            <select value={update} className="form-select form-select-sm me-md-1" onChange={handleOptionChange}>
                                {options.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.title}
                                    </option>
                                ))}
                            </select>
                            {
                                subCategories?.length < 1 &&
                                <button className="btn__rest" onClick={handleResetClick}>Reset</button>
                            }
                        </div>
                    </div>
                </div>
                {
                    subCategories?.length > 0 &&
                    <div className="col-md-4">
                        <div className="app__form__row">
                            <div className="d-flex align-items-center">
                                <select className="form-select form-select-sm me-md-1" onChange={handleSubOptionChange}>
                                    <option >Select Sub Categories</option>
                                    {subCategories.map((option) => (
                                        <option key={option.id} value={option.id}>
                                            {option.title}
                                        </option>
                                    ))}
                                </select>
                                <button className="btn__rest" onClick={handleResetClick}>Reset</button>
                            </div>
                        </div>
                    </div>
                }
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="">
                        {
                            subCategories?.length > 0 ?
                                subCategoriesData?.length > 0 &&
                                <div className="table-responsive pt-1 d-flex justify-content-start">
                                    <table className="table table-bordered thana__table">
                                        <thead>
                                            <tr>
                                                <th className="th__sr">#</th>
                                                <th>পদবী</th>
                                                <th className="thana__th">নাম</th>
                                                <th>ছবি</th>
                                                <th>মোবাইল</th>
                                                <td>ফোন</td>
                                                <td>ফ্যাক্স</td>
                                                <td>ই-মেইল</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                subCategoriesData.map((item, index) => <tr className="tr__body" key={item.id}>
                                                    <td>{index + 1}.</td>
                                                    <td>{item.designation}</td>
                                                    <td>{item.name}</td>
                                                    <td className="text-center">
                                                        {
                                                            item.image ?
                                                                <img src={`${imgUrl}/${item.image}`} className="img-fluid" style={{ width: '80px', height: '80px' }} alt="image" loading='lazy' />
                                                                :
                                                                <img src={DomDaines} className="img-fluid" style={{ width: '80px', height: '80px' }} alt="image" loading='lazy' />
                                                        }
                                                    </td>
                                                    <td>{item.mobile}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.fax}</td>
                                                    <td>{item.email}</td>
                                                </tr>)
                                            }

                                        </tbody>


                                    </table>
                                </div>

                                :
                                selectedOption?.length > 0 &&
                                <div className="table-responsive pt-1 d-flex justify-content-start">
                                    <table className="table table-bordered thana__table">
                                        <thead>
                                            <tr>
                                                <th className="th__sr">#</th>
                                                <th>পদবী</th>
                                                <th className="thana__th">নাম</th>
                                                <th>ছবি</th>
                                                <th>মোবাইল</th>
                                                <td>ফোন</td>
                                                <td>ফ্যাক্স</td>
                                                <td>ই-মেইল</td>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                selectedOption.map((item, index) => <tr className="tr__body" key={item.id}>
                                                    <td>{index + 1}.</td>
                                                    <td>{item.designation}</td>
                                                    <td>{item.name}</td>
                                                    <td className="text-center">
                                                        {
                                                            item.image ?
                                                                <img src={`${imgUrl}/${item.image}`} className="img-fluid" style={{ width: '80px', height: '80px' }} alt="image" loading='lazy' />
                                                                :
                                                                <img src={DomDaines} className="img-fluid" style={{ width: '80px', height: '80px' }} alt="image" loading='lazy' />
                                                        }
                                                    </td>
                                                    <td>{item.mobile}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.fax}</td>
                                                    <td>{item.email}</td>
                                                </tr>)
                                            }

                                        </tbody>


                                    </table>
                                </div>


                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default PhoneDirectory;