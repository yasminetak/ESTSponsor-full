-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : jeu. 15 avr. 2021 à 02:20
-- Version du serveur :  10.4.18-MariaDB
-- Version de PHP : 7.3.27

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `parrains`
--

-- --------------------------------------------------------

--
-- Structure de la table `document`
--

CREATE TABLE `document` (
  `id_document` int(100) NOT NULL,
  `titre_document` varchar(100) NOT NULL,
  `chemin_document` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `message`
--

CREATE TABLE `message` (
  `id_message` int(100) NOT NULL,
  `timestamp` varchar(100) DEFAULT NULL,
  `contenu` varchar(100) NOT NULL,
  `id_emeteur` int(11) NOT NULL,
  `id_recepteur` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `notifications`
--

CREATE TABLE `notifications` (
  `id_notif` int(100) NOT NULL,
  `contenu` varchar(100) NOT NULL,
  `id_emeteur` int(11) NOT NULL,
  `id_recepteur` int(11) NOT NULL,
  `type` varchar(100) DEFAULT NULL,
  `timestamp` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `parrains_list`
--

CREATE TABLE `parrains_list` (
  `id` int(200) NOT NULL,
  `parrain_nom` varchar(200) NOT NULL,
  `parrain_fillière` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `parrains_list`
--

INSERT INTO `parrains_list` (`id`, `parrain_nom`, `parrain_fillière`) VALUES
(1, 'Takatart Yasmine', 'Génie Informatique'),
(2, 'Lyoubi Hajar', 'Génie Informatique'),
(3, 'Sebti Zineb ', 'Génie mécanique'),
(4, 'Adnani Hajar', 'Génie Eléctrique'),
(5, 'Jebrane Adnane', 'Finance Comptabilité'),
(6, 'Nakri Aya', 'Technique de Commercialisation'),
(7, 'Bennani Marouane', 'Génie des procédés'),
(8, 'Jidri Youssef', 'Finance Comptabilité'),
(9, 'Ahmed Reda', 'Génie mécanique'),
(10, 'Chakour Saloua', 'Génie des procédés');

-- --------------------------------------------------------

--
-- Structure de la table `publicite`
--

CREATE TABLE `publicite` (
  `id_publicite` int(100) NOT NULL,
  `titre_publicite` varchar(100) NOT NULL,
  `titre_description` varchar(100) NOT NULL,
  `timestamp` varchar(100) DEFAULT NULL,
  `id_document` int(100) DEFAULT NULL,
  `id_utilisateur` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `utilisateur`
--

CREATE TABLE `utilisateur` (
  `id` int(200) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(200) NOT NULL,
  `password` varchar(100) NOT NULL,
  `number` varchar(100) NOT NULL,
  `user` varchar(100) NOT NULL,
  `filiere` varchar(100) NOT NULL,
  `ville` varchar(100) NOT NULL,
  `age` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `utilisateur`
--

INSERT INTO `utilisateur` (`id`, `name`, `email`, `password`, `number`, `user`, `filiere`, `ville`, `age`) VALUES
(1, 'yasmine', 'yasmine@gmail.com', 'asmine', '0657483900', 'parrain', 'genie informatique', '', ''),
(3, 'hajar', 'hajar@gmail.com', 'Hajar', '0677778899', 'parrain', 'genie informatique', '', ''),
(4, '', '', '', '', '', '', '', ''),
(5, '', '', '', '', '', '', '', ''),
(6, 'testt', 'test@test.com', '123', 'N123', 'filleul', 'GI', 'Casablanca', '21');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `document`
--
ALTER TABLE `document`
  ADD PRIMARY KEY (`id_document`);

--
-- Index pour la table `message`
--
ALTER TABLE `message`
  ADD PRIMARY KEY (`id_message`),
  ADD KEY `emeteur_fky` (`id_emeteur`),
  ADD KEY `recepteur_fky` (`id_recepteur`);

--
-- Index pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD PRIMARY KEY (`id_notif`),
  ADD KEY `recepteur2_fky` (`id_recepteur`),
  ADD KEY `emeteur2_fky` (`id_emeteur`);

--
-- Index pour la table `parrains_list`
--
ALTER TABLE `parrains_list`
  ADD PRIMARY KEY (`id`);

--
-- Index pour la table `publicite`
--
ALTER TABLE `publicite`
  ADD PRIMARY KEY (`id_publicite`),
  ADD KEY `document_fk3` (`id_document`),
  ADD KEY `user_fky` (`id_utilisateur`);

--
-- Index pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `document`
--
ALTER TABLE `document`
  MODIFY `id_document` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `message`
--
ALTER TABLE `message`
  MODIFY `id_message` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `notifications`
--
ALTER TABLE `notifications`
  MODIFY `id_notif` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `publicite`
--
ALTER TABLE `publicite`
  MODIFY `id_publicite` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `utilisateur`
--
ALTER TABLE `utilisateur`
  MODIFY `id` int(200) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `message`
--
ALTER TABLE `message`
  ADD CONSTRAINT `emeteur_fky` FOREIGN KEY (`id_emeteur`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recepteur_fky` FOREIGN KEY (`id_recepteur`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `notifications`
--
ALTER TABLE `notifications`
  ADD CONSTRAINT `emeteur2_fky` FOREIGN KEY (`id_emeteur`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `recepteur2_fky` FOREIGN KEY (`id_recepteur`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `publicite`
--
ALTER TABLE `publicite`
  ADD CONSTRAINT `document_fk3` FOREIGN KEY (`id_document`) REFERENCES `document` (`id_document`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_fky` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateur` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
