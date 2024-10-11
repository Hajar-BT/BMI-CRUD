import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle, deleteArticle, updateArticle } from '../features/articlesSlice';
import Swal from 'sweetalert2';
import { FaPlus, FaEdit, FaTrash } from 'react-icons/fa';

const ArticleManager = () => {
  const dispatch = useDispatch();
  const articles = useSelector((state) => state.articles.articles);

  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [image, setImage] = useState('');
  const [currentId, setCurrentId] = useState(null);

  const handleAddArticle = () => {
    if (!title || !details || !image) {
      Swal.fire({
        icon: 'warning',
        title: 'Input Required',
        text: 'Please enter title, details, and image URL.',
      });
      return;
    }

    const newArticle = { id: Date.now(), title, details, image };
    dispatch(addArticle(newArticle));
    setTitle('');
    setDetails('');
    setImage('');
  };

  const handleEditArticle = (article) => {
    setTitle(article.title);
    setDetails(article.details);
    setImage(article.image);
    setCurrentId(article.id);
  };

  const handleUpdateArticle = () => {
    if (!title || !details || !image) {
      Swal.fire({
        icon: 'warning',
        title: 'Input Required',
        text: 'Please enter title, details, and image URL.',
      });
      return;
    }

    dispatch(updateArticle({ id: currentId, title, details, image }));
    setTitle('');
    setDetails('');
    setImage('');
    setCurrentId(null);
  };

  return (
    <div className="p-6 min-h-screen bg-blue-50">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Article Manager</h1>
      <div className="mb-6 bg-white p-6 rounded-lg shadow-lg">
        <input
          type="text"
          placeholder="Article Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border p-3 rounded-md w-full mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <textarea
          placeholder="Article Details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          className="border p-3 rounded-md w-full mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="border p-3 rounded-md w-full mb-4 shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={currentId ? handleUpdateArticle : handleAddArticle}
          className="bg-green-500 text-white py-3 rounded-md w-full flex items-center justify-center transition duration-200 hover:bg-green-600"
        >
          {currentId ? <FaEdit className="mr-2" /> : <FaPlus className="mr-2" />}
          {currentId ? 'Update Article' : 'Add Article'}
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div key={article.id} className="bg-white shadow-lg rounded-lg p-4 flex flex-col transition-transform transform hover:scale-105">
            <div className="flex justify-center mb-2">
              <img 
                src={article.image} 
                alt={article.title} 
                className="rounded-lg object-contain w-full h-48"
              />
            </div>
            <h2 className="font-semibold text-xl text-gray-800 hover:text-gray-600">{article.title}</h2>
            <p className="mt-2 text-gray-600 flex-1">{article.details}</p>
            <div className="mt-4 flex justify-between items-center">
              <button onClick={() => handleEditArticle(article)} className="text-blue-500 hover:text-blue-700">
                <FaEdit />
              </button>
              <button onClick={() => dispatch(deleteArticle(article.id))} className="text-red-500 hover:text-red-700">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleManager;
