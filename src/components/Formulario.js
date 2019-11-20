import React,{Component} from 'react';

export default class Formulario extends Component {
// iniciar el video 4
    render() {
        return (
            <form>
                <div className="form-group">
                    <label>Moneda:</label>
                        <select className="form-control">
                            <option value="" disable defaultValue>Elige tu moneda</option>
                            <option value="MXN">Peso Mexicano</option>
                            <option value="USD">Dolar Estadounidense</option>
                            <option value="EUR">Euros</option>
                            <option value="GBP">Libras</option>
                    </select>
                </div>
                <div className="form-group">
                    <label>Criptomoneda</label>
                        <select className="form-control">

                        </select>
                </div>
                <div className="form-group">
                    <input type="submit" className="btn btn-primary" value="Cotizar" 
                    />
                </div>


            </form>
        );
    }
}