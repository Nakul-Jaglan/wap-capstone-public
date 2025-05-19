"use client"
import { useState } from 'react';
import '../styles/gemini.css'
import TodoList from './todolist';

function Gemini() {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!query.trim()) return;

        setLoading(true);
        setError(null);
        setResults(null);

        try {
            const response = await fetch('/api/gemini', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ prompt: query }),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Failed to fetch recipe');
            }

            if (!data.ingredients || !data.instructions) {
                throw new Error('Invalid recipe format received');
            }

            setResults(data);
        } catch (err) {
            setError(err.message || 'Failed to fetch recipe. Please try again.');
            console.error('Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="gemini-section">
            <h2 className="gemini-title">Recipe Search</h2>
            <p className="gemini-text">
                Enter any dish name to get its recipe and ingredients
            </p>

            <form onSubmit={handleSubmit} className="gemini-bar">
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Enter a dish name..."
                    className="gemini-input"
                    disabled={loading}
                />
                <button 
                    type="submit" 
                    className="gemini-btn"
                    disabled={loading || !query.trim()}
                >
                    {loading ? 'Searching...' : 'Search'}
                </button>
            </form>

            {error && (
                <div className="error-message">
                    {error}
                </div>
            )}

            {loading && (
                <div className="loading-message">
                    Generating recipe...
                </div>
            )}

            {results && (
                <div className="recipe-results">
                    <h3>Ingredients Checklist for {query}</h3>
                    <div className="ingredients-list">
                        <TodoList items={Array.isArray(results.ingredients) ? results.ingredients : []} />
                    </div>
                    <button 
                        className="gemini-reset-btn"
                        onClick={() => {
                            setQuery('');
                            setResults(null);
                            setError(null);
                        }}
                    >
                        Reset
                    </button>
                </div>
            )}
        </section>
    );
}

export default Gemini;