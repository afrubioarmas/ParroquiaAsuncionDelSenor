package com.bezikee.DataAccessLayer.User;

import com.bezikee.DataAccessLayer.Dao;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.sql.CallableStatement;
import java.sql.SQLException;

public class UserDao implements IUserDao{

    private final static Logger logger = LoggerFactory.getLogger(UserDao.class);

    public boolean create(UserBean input) {
        logger.debug("Debug: UserDao - create");
        CallableStatement Sentence = Dao.getCallableSentence("{Call UserCreate (?,?,?,?,?,?,?)}");

        try {
            Sentence.setString(1, input.getName());
            Sentence.setString(2, input.getLastName());
            Sentence.setString(3, input.getEmail());
            Sentence.setString(4, input.getUsername());
            Sentence.setString(5, input.getPassword());
            Sentence.setDate  (6, input.getBirthDate());
            Sentence.setString(7, input.getSex());

        } catch (SQLException e) {
            logger.error( "Method: ", "UserDao - create", e.toString() );
        }

        boolean output = Dao.executeCall(Sentence);

        Dao.close();

        return output;
    }

   /* public BeanPregunta read(int id) {

        BeanPregunta salida = null;
        ResultSet rs =null;
        CallableStatement Sentencia = Dao.getCallableSentence("VPC_readPregunta ?");

        try {
            Sentencia.setInt(1, id);

            rs =Dao.executeQuery(Sentencia);

            if(rs!=null)
                salida = getResponseBD(rs);

        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode()+900);
        }
        Dao.close();

        return salida;


    }

    public ArrayList<BeanPregunta> readAll(){

        ArrayList<BeanPregunta> salida = null;
        ResultSet rs =null;

        CallableStatement Sentencia = Dao.getCallableSentence("VPC_readAllPregunta");
        //Sentencia.setString(1, canal.getAutorizante());

        rs =Dao.executeQuery(Sentencia);

        if(rs!=null)
            salida = getResponseArrayListBD(rs);

        Dao.close();

        return salida;
    }

    public boolean update(BeanPregunta pregunta) {

        CallableStatement Sentencia = Dao.getCallableSentence("VPC_updatePregunta ?,?,?,?,?,?,?,?,?");

        try {
            Sentencia.setString(1, pregunta.getEnunciado());
            Sentencia.setString(2, pregunta.getTitulo());
            Sentencia.setString(3, pregunta.getTipo());
            Sentencia.setString(4, pregunta.getAtributo());
            Sentencia.setString(5, pregunta.getValidacion());
            Sentencia.setString(6, pregunta.getDigitos());
            Sentencia.setString(7, pregunta.getAplica());
            Sentencia.setString(8, pregunta.getEstatus());
            Sentencia.setString(9, pregunta.getId());
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode()+900);
        }

        boolean salida = Dao.executeCall(Sentencia);

        Dao.close();

        return salida;
    }

    public boolean delete(int id) {


        boolean salida = false;
        CallableStatement Sentencia = Dao.getCallableSentence("VPC_deletePregunta ?");


        try {
            Sentencia.setInt(1, id);
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode()+900);
        }

        salida =Dao.executeCall(Sentencia);

        Dao.close();

        return salida;
    }




    private ArrayList<BeanPregunta> getResponseArrayListBD(ResultSet rs){

        ArrayList<BeanPregunta> salida = new ArrayList<BeanPregunta>();

        try {
            while (rs.next()){
                BeanPregunta p = new BeanPregunta();
                p.setId(rs.getString("PR_ID"));
                p.setEnunciado(rs.getString("PR_ENUNCIADO"));
                p.setTitulo(rs.getString("PR_TITULO"));
                p.setTipo(rs.getString("PR_TIPO"));
                p.setAtributo(rs.getString("PR_ATRIBUTO"));
                p.setValidacion(rs.getString("PR_VALIDACION"));
                p.setDigitos(rs.getString("PR_DIGITOS"));
                p.setAplica(rs.getString("PR_APLICA"));
                p.setEstatus(rs.getString("PR_ESTATUS"));
                salida.add(p);
            }
        } catch (SQLException e) {
            e.printStackTrace();
            System.out.println("SQL Exception: "+ e.getErrorCode()+900);
        }

        return salida;

    }

    private BeanPregunta getResponseBD(ResultSet rs) throws NullPointerException, SQLException{

        BeanPregunta salida = new BeanPregunta();

        while (rs.next()){
            salida.setId(rs.getString("PR_ID"));
            salida.setEnunciado(rs.getString("PR_ENUNCIADO"));
            salida.setTitulo(rs.getString("PR_TITULO"));
            salida.setTipo(rs.getString("PR_TIPO"));
            salida.setAtributo(rs.getString("PR_ATRIBUTO"));
            salida.setValidacion(rs.getString("PR_VALIDACION"));
            salida.setDigitos(rs.getString("PR_DIGITOS"));
            salida.setAplica(rs.getString("PR_APLICA"));
            salida.setEstatus(rs.getString("PR_ESTATUS"));
        }

        return salida;

    }*/

}
