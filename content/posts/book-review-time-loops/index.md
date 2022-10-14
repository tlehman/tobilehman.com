+++
title = "Book Review: Time Loops"
date = 2022-10-13T21:10:35-07:00
tags = ["book-review", "time", "time-travel", "dreams", "qubits", "physics", "math"]
+++

The book [Time Loops](https://www.amazon.com/Time-Loops-Precognition-Retrocausation-Unconscious/dp/1938398920) by [Eric Wargo](http://www.thenightshirt.com/?p=2202) makes a careful argument for the reality of precognitive dreams.

My personal interest in this topic has to do with my obsession with [time](/tags/time) and to an extent, [time travel](/tags/time-travel).

The author starts the book by summarizing a number of examples of dreams that came true, and closely studies an early dream pioneer named J.W. Dunne who wrote [An Experiment with Time](https://en.wikipedia.org/wiki/An_Experiment_with_Time). What stands out about Dunne is how he made the distinction between dreaming about _events out in the world_ vs _events as experienced by the future self_. 

After systematically reviewing the best examples of precognitive dreams, he gets into adjacent topics like ESP, and suggests that perhaps ESP is actually precognition but it's being miscategorized. The body of evidence that requires such an explanation is from the [CIA's Star Gate program](https://www.cia.gov/readingroom/collection/stargate).

The second part of the book gets into the relevant physics that might explain how the brain could possibly communicate with it's earlier self. This is the part that I was most interested in. I learned about [John G. Cramer](https://en.wikipedia.org/wiki/John_G._Cramer)'s idea of the Transactional Interpretation of Quantum Mechanics.

# Transactional Interpretation of Quantum Mechanics

Ever since the 1920s, the theory of quantum mechanics has been widely known to work well in the lab, but completely perplex the greatest minds in the world. It so defies explanation that even the great physicist Richard Feynman said "If you think you understand it[quantum mechanics], then you don't understand it".

Well he's wrong, and I'll survey the landscape of attempts to understand it. They all share the actual math of quantum mechanics, which is linear algebra on Hilbert spaces. The Hilbert spaces are the quantum states, and the linear operators on those spaces are the observables. 

## Quantum mechanics for math nerds
Let \\( |\psi(t) \rangle \\) be a quantum state in the Hilbert space \\(H\\), at time \\(t\\). The future state is given by the Schrodinger equation (the operator \\( \hat{H} \\) gives the energy of the wavefunction input)

$$ i \hbar \frac{d}{dt} |\psi(t)\rangle = 
 \hat{H}|\psi(t)\rangle $$

Then if you want to calculate the probability of observing some value for an observable \\( O \\), just compute \\( \langle \psi^*(t) | O | \psi(t) \rangle \\).

If you know some linear alebra and can work with [imaginary numbers](/posts/imaginary-numbers-are-real), then this part is straightforward. What's not straightforward is trying to think about why this formalism works so well in the lab.

## Survey of existing interpretations

The many interpretations of quantum mechanics all have the same underlying math.
Each explains more or less, and each is mostly about the kinds of things that philosophers care about, like "what is real?", and "what do we know?" and all that. You know, important stuff.

The first and most widely used interpretation was formed in Copenhagen:

### Copenhagen interpretation

The Copenhagen interpretation doesn't say whether the \\( |\psi(t) \rangle \\), the quantum state, is real. It also doesn't even commit to the existence of any reality before a measurement is made.

Copenhagen is the "don't ask, don't tell" of interpretations.

The most it says is that only observable quantities are real, and that measurements "collapse the wavefunction at the moment of measurement". It doesn't explain what a measurement is, and it also asserts that the collapse of the wavefunction to one of the observable's eigenvalues* is random.

*eigenvalues are solutions to this equation: \\(O |\psi\rangle = x |\psi\rangle \\), the \\(x\\) is a complex number, and it's an eigenvalue of the observable operator \\(O\\). 

Copenhagen leaves so much unexplained that those who've internalized it have learned to just not think about reality. They learned to "shut up and calculate".

Copenhagen also just axiomatically assumes the wave-particle duality and doesn't expand on how that might be. Particles are waves and sometimes particles. Energy is quantized and particle-like, but the wave function is a wave. It does not explain further.

### Many Worlds Interpretation

I talk about this one in my post [qubits in the multiverse](/posts/qubits-multiverse). What Many Worlds says is that \\(|\psi(t)\rangle\\) is in fact real, and all the eigenvalues exist in parallel universes. Those parallel universes can interact and interfere (like a wave), but in each universe there is only a particle.

In Many Worlds the measurement is whenever an observer becomes entangled with the thing being measured. This prevents the interference between all the parallel universes. The physicist David Deutsch describes this as a "wave of differentiation" that propagates out, preventing the other branches from coherently interfering with our branch. This explains wave-function collapse, but the cost is that we have to accept a branching multiverse.

It also explains the wave-particle duality. Wave-like interference patterns happen until a measurement is made, which causes the observer to become entangled and mess up the previous coherent state.

### Transactional Interpretation

The transactional interpration explains the most, and it also avoids invoking a multiverse. In fact, it implies that quantum mechanics can be made compatible with general relativity, the only weird thing is that it involves retrocausality.

It's this retrocausal part that relates to the book Time Loops. I've bought John G. Cramer's book "The Quantum Handshake", and I'll dedicate a future post just to explaining and visualizing what it says about the world behind the wavefunction. From what I've read so far, it's comprehensible, beautiful and profound. I will resist getting too deep into it in this post, since this post is about the book Time Loops.

The transactional interpretation says that the wave function \\( |\psi(t) \rangle \\) is not only real, but it's a physical wave that travels forward in time (the "offer wave"), and it's complex conjugate \\( |\psi^*(t) \rangle \\) reflects off of potential absorbers and returns to the origin point as a "confirmation wave". The confirmation wave travels back in time.

The offer wave and confirmation wave propagate forward and backward in time, in a cycle that grows or shrinks in intensity. If the intensity rises above the threshold of a quantum of energy, then that quantum of energy is transferred from the emission point to the absorption point. This is when a "transacton has completed".

These emission and absorption points have a standing wave between them, and the standing wave transfers some quantity, like energy, from a spacetime point in the past (emission point) to a spacetime point in the future. The particles values are discrete, like what Planck discovered. The reason energy in quantum mechanics is quantized is because standing waves have modes: 

![modes](https://upload.wikimedia.org/wikipedia/commons/0/03/Harmonic_series_on_a_string.gif)

The transactional interpretation also explains wavefunction collapse. Collapse is a transaction being completed. It explains wave-particle duality: all are waves, but the choice of boundary conditions (considering an emission point and an absorption point) forces particle-like properties on the waves. What is observed is a particle, but it's not mysterious why these standing waves in spacetime behave like particles, you can visualize it.

The reason this came up in Time Loops is because the author speculates that perhaps, if the brain has quantum mechanical parts, such as [Penrose/Hamerof microtubules](https://en.wikipedia.org/wiki/Orchestrated_objective_reduction), then maybe those quantum mechanical parts can receive confirmation waves from the future and trigger neurons to fire. The whole book doesn't hinge on this particular hypothesis, but I am glad he included it since it adds credibility to the idea that perhaps this is a real phenomenon and we just don't understand it yet.

What's also amazing is how the transactional interpretation explains entanglement without using faster-than-light action. The future measurement of one side of an entangled pair can influence the past, which is easier to think about in an Einsteinian universe.

For more on the transactional interpretation of quantum mechanics, read my [future blog post](/posts/quantum-tx) (_coming soon_).

The book wraps up with the author's story of his own precognitive dream of writing this very book.
It took him 18 years to realize the meaning of the dream, but he had written it down, and it even 
included one of the symbols on the spine of the book (a symbol he didn't choose from the publisher).

As a skeptic I have to admit I am impressed with this book. It makes a very cautious, empirical and theoretically viable argument for the reality of precognitive dreams. The physics of retrocausality looks like an exciting frontier that promises to open up the past to our influence. If this book is right, then we are already doing it, but without awareness. His newest book "Precognitive Dreamwork and the Long Self" is all about how to test this for yourself. I already bought it and in the near future have finished it.

