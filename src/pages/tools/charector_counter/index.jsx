// pages/analyzer.js
import { Roboto } from 'next/font/google'
import { useState } from 'react';
import AddBanner from '@/components/ads/Add_banner';
// Import the spinner component from a package
import { ThreeDots } from 'react-loader-spinner';
import HeadTag from '@/components/basics/HeadTag';
const roboto = Roboto({
    subsets: ["latin"],
    weight: ['100', '300', '400', '500', '700', '900']
})
function Analyzer() {
    // State variables to track input text, results, and loading state
    const [text, setText] = useState('');
    const [results, setResults] = useState({
        characters: 0,
        words: 0,
        sentences: 0,
        paragraphs: 0,
        spaces: 0,
    });
    const [isLoading, setIsLoading] = useState(false); // State to track loading

    // Function to calculate text metrics
    const handleCalculate = () => {
        setIsLoading(true); // Set loading state to true

        // Simulate a delay to show the spinner
        setTimeout(() => {
            // Calculate the number of characters, words, sentences, paragraphs, and spaces
            const characters = text.length;
            const words = text.split(/\s+/).filter(Boolean).length;
            const sentences = text.split(/[.!?]+/).filter(Boolean).length;
            const paragraphs = text.split(/\n+/).filter(Boolean).length;
            const spaces = (text.match(/\s/g) || []).length;

            // Update the results state
            setResults({ characters, words, sentences, paragraphs, spaces });
            setIsLoading(false); // Set loading state to false when calculation is done
        }, 1000); // Adjust the delay as per your requirement
    };

    // Function to clear the input text and reset results
    const handleClear = () => {
        setText('');
        setResults({
            characters: 0,
            words: 0,
            sentences: 0,
            paragraphs: 0,
            spaces: 0,
        });
    };

    return (
<>
<HeadTag title="Free Text Analyzer Tool" description="Analyze your text with our free Text Analyzer Tool. Quickly calculate characters, words, sentences, paragraphs, and spaces. Optimize your writing effortlessly!"/>
<div style={{ padding: '20px' }} className={`${roboto.className}`}>
            <AddBanner/>
            <h1 className='text-3xl my-5'>Text Analyzer</h1>
            <textarea
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ width: '100%', height: '200px' }}
                placeholder="Enter text here..."
                className={`border-none text-black outline-blue-300 rounded-lg p-4 text-md`}
            />
            <br />
            <div className='flex'>
                <button onClick={handleCalculate} className='flex h-8 w-18 justify-center items-center px-2 rounded-md bg-green-500' style={{ margin: '10px 5px' }}>
                    <p>Calculate</p><span className='material-icons'>calculate</span>
                </button>
                <button onClick={handleClear} className='flex h-8 w-18 justify-center items-center px-2 rounded-md bg-orange-500' style={{ margin: '10px 5px' }}>
                    <p>Clear</p><span className='material-icons'>clear</span>
                </button>
            </div>

            {/* Display the spinner when loading */}
            {isLoading && (
                <div style={{ marginTop: '20px' }}>
                    {/* Spinner component from react-loader-spinner */}
                    <ThreeDots
                        height="50"
                        width="50"
                        color="#0891b2"
                        ariaLabel="loading"
                    />
                </div>
            )}

            {/* Display results only when not loading */}
            {!isLoading && (
                <div className="results" style={{ marginTop: '20px' }}>
                    <p>Characters: {results.characters}</p>
                    <p>Words: {results.words}</p>
                    <p>Sentences: {results.sentences}</p>
                    <p>Paragraphs: {results.paragraphs}</p>
                    <p>Spaces: {results.spaces}</p>
                </div>
            )}
        </div>
</>
    );
}

export default Analyzer;
