public class WaveNerd extends Creatures {
    public WaveNerd(){
        getPoder();
        getAtaque();
        getDefesa();
        getVelocidade();
        getPontosDeVida();
    }
    
    @Override
    public String toString() {
        return String.format("%s %n %s: %d %n %s: %d %n %s: %d %n %s: %d %n %s: %d %n",
         "*****WaveNerd*****",
                "Poder", getPoder(), 
                "Ataque", getAtaque(),
                "Defesa", getDefesa(), 
                "Velocidade", getVelocidade(),
                "Pontos de Vida", getPontosDeVida());
    }
    
}
