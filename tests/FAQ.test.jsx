import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FAQ from '../src/components/FAQ';

// Mock pour AOS
global.AOS = {
  refresh: vi.fn()
};

describe('FAQ Component', () => {
  it('renders the component correctly', () => {
    render(<FAQ />);
    
    // Vérifier que le titre est affiché
    expect(screen.getByText('Questions Fréquentes')).toBeInTheDocument();
    
    // Vérifier que la barre de recherche est présente
    expect(screen.getByPlaceholderText('Rechercher une question...')).toBeInTheDocument();
    
    // Vérifier que les questions sont affichées
    expect(screen.getByText('Puis-je organiser des événements dans la villa ?')).toBeInTheDocument();
    expect(screen.getByText('Le service de ménage est-il inclus dans le prix ?')).toBeInTheDocument();
    expect(screen.getByText('Y a-t-il un service de conciergerie disponible ?')).toBeInTheDocument();
    expect(screen.getByText('Comment se déroule le check-in et le check-out ?')).toBeInTheDocument();
    expect(screen.getByText('La villa est-elle adaptée aux enfants ?')).toBeInTheDocument();
  });

  it('displays answer when a question is clicked', () => {
    render(<FAQ />);
    
    // Vérifier que la réponse n'est pas visible au départ
    const firstQuestion = screen.getByText('Puis-je organiser des événements dans la villa ?');
    const answerText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.';
    
    // Au départ, la réponse ne devrait pas être visible
    expect(screen.queryByText(answerText)).not.toBeVisible();
    
    // Cliquer sur la question
    fireEvent.click(firstQuestion);
    
    // Maintenant la réponse devrait être visible
    expect(screen.getByText(answerText)).toBeVisible();
    
    // Cliquer à nouveau pour fermer
    fireEvent.click(firstQuestion);
    
    // La réponse ne devrait plus être visible
    expect(screen.queryByText(answerText)).not.toBeVisible();
  });

  it('filters questions when searching', () => {
    render(<FAQ />);
    
    const searchInput = screen.getByPlaceholderText('Rechercher une question...');
    
    // Rechercher "ménage"
    fireEvent.change(searchInput, { target: { value: 'ménage' } });
    
    // La question sur le ménage devrait être visible
    expect(screen.getByText('Le service de ménage est-il inclus dans le prix ?')).toBeInTheDocument();
    
    // Les autres questions ne devraient pas être visibles
    expect(screen.queryByText('Puis-je organiser des événements dans la villa ?')).not.toBeInTheDocument();
    
    // Effacer la recherche
    fireEvent.change(searchInput, { target: { value: '' } });
    
    // Toutes les questions devraient être à nouveau visibles
    expect(screen.getByText('Puis-je organiser des événements dans la villa ?')).toBeInTheDocument();
    expect(screen.getByText('Le service de ménage est-il inclus dans le prix ?')).toBeInTheDocument();
  });
}); 