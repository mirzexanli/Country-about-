import React, { useContext, useState } from 'react';  
import { Link } from 'react-router-dom';  
import { DATA } from '../../context/DataContext';  
 import { WISHCONTEXT } from '../../context/WishListContext';
import Card from './Card Folder/Card';  

function Main() {  
  const { wishList, setWishList } = useContext(WISHCONTEXT);  
  const { data } = useContext(DATA);  
  
  const [country, setCountry] = useState(20);  
  const [searchQuery, setSearchQuery] = useState('');  
  const [show, setShow] = useState(false);  

  // Data filtreleme  
  const filteredData = data ? data.filter((item) =>   
    item?.name?.common?.toLowerCase().includes(searchQuery.toLowerCase())  
  ) : [];  

  function addToWishList(id, flag, name, region) {  
    const obj = { id, flag, name, region };  
    const updatedWishList = [...wishList, obj];  
    setWishList(updatedWishList);  
    localStorage.setItem("wish", JSON.stringify(updatedWishList));  
  }  

  return (  
    <main className="dark:bg-gray-200 text-gray-600">  
      <section className="h-full">  
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-16 xl:max-w-2xl">  
          {show && (  
            <input   
              type="text"   
              className="border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block ps-10 p-2.5"  
              placeholder="Ölkə adı axtarın..."  
              value={searchQuery}  
              onChange={(e) => setSearchQuery(e.target.value)}  
            />  
          )}  
        </div>  
        <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-16 md:px-10 lg:px-16 xl:max-w-3xl">  
          <h1 className="text-4xl font-bold text-black">  
            Ölkə axtarışına  
            <br />  
            <span className="inline-block text-sm text-indigo-500 text-[40px]">Xoş gəlmisiniz</span>  
          </h1>  
          <p className="py-6">Aşağıdan bütün ölkələri axtara və onlar haqqında ətraflı məlumat tapa bilərsiniz!</p>  
          <div className="flex flex-wrap justify-center space-x-4 ">  
            <button   
              className="px-8 py-3 m-2 text-lg font-semibold rounded bg-indigo-500 text-white"  
              onClick={() => setShow(!show)}  
            >  
              Axtarmağa Başla  
            </button>  
            <button className="px-8 py-3 m-2 text-lg font-semibold rounded">Ölkələrə keçid et...</button>  
          </div>  
        </div>  
      </section>  
      <section>  
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">  
          <Link to="" className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 bg-gray-100 text-black">  
            <img className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7" src="https://flagcdn.com/us.svg" alt="United States" />  
            <div className="p-6 space-y-2 lg:col-span-5">  
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">United States</h3>  
              <span className="text-xs dark:text-gray-400">Paytaxt: Washington D.C.</span>  
              <p>Yerləşdiyi Qitə: Americas</p>  
              <p>United States-in əhalisi: 329484123</p>  
            </div>  
          </Link>  
          <div>  
            Onun qonşuları:  
            <Link to="/can" className="inline-block px-2 py-1 text-sm font-semibold rounded-md my-1 mx-2 dark:bg-violet-400 dark:text-gray-900">Can</Link>  
            <Link to="/mex" className="inline-block px-2 py-1 text-sm font-semibold rounded-md my-1 mx-2 dark:bg-violet-400 dark:text-gray-900">Mex</Link>  
          </div>  
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">  
            {filteredData.length > 0 ?   
              filteredData.slice(0, country).map((item, i) => (  
                <Card key={i} item={item} addToWishList={addToWishList} />  
              )) : "Loading..."  
            }  
          </div>  
          <div className="flex justify-center">  
            <button   
              onClick={() => setCountry(country + 9)}  
              className="px-8 py-3 m-auto text-white bg-sky-600 rounded">Daha çox</button>  
          </div>  
        </div>  
      </section>  
    </main>  
  );  
}  

export default Main;